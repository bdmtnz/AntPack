import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { Artifact } from 'src/app/proof/models/artifact';
import { Paper } from 'src/app/proof/models/paper';
import { Rock } from 'src/app/proof/models/rock';
import { Scissor } from 'src/app/proof/models/scissor';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Input() number:any;
  @Input() reset:any;
  @Output() selected = new EventEmitter<Artifact>();
  scissor:Scissor;
  rock:Rock;
  paper:Paper;
  select:Artifact;

  constructor() {
    this.scissor = new Scissor();
    this.rock = new Rock();
    this.paper = new Paper();
    this.select = new Artifact();
  }

  ngOnInit(): void {
  }

  resetChoose(){
    this.select = new Artifact();
    return '';
  }

  selection(artifact:Artifact){
    this.select = artifact;
    this.selected.emit(artifact);
  }

}
