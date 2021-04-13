import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Artifact } from 'src/app/proof/models/artifact';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  reactive:FormGroup;
  gameResult:FormGroup;
  winner:string;

  constructor(private builder:FormBuilder) { 
    this.reactive = this.builder.group({
      jugador1: ['', Validators.required],
      jugador2: ['', Validators.required],
    });
    this.gameResult = this.builder.group({
      jugador1: ['', Validators.required],
      jugador2: ['', Validators.required],
    });
    this.winner = "?";
  }

  ngOnInit(): void {
  }

  setResultPlayer1(artifact:Artifact){
    this.gameResult.controls.jugador1.setValue(artifact);
    this.battle();
    console.log(artifact);
  }

  setResultPlayer2(artifact:Artifact){
    this.gameResult.controls.jugador2.setValue(artifact);
    this.battle();
    console.log(artifact);
  }

  battle(){
    if(this.gameResult.valid){
      let result = this.gameResult.controls.jugador1.value.win(this.gameResult.controls.jugador2.value);
      if(result != undefined)
        this.winner = `El jugador ${result ? this.reactive.controls.jugador1.value: this.reactive.controls.jugador2.value} ha ganado`;
      else
        this.winner = "Ha habido un empate";
      //this.gameResult.reset();
    }
    else{
      this.winner = "?";
    }
  }

}
