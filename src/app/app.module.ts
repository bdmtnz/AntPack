import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './proof/views/dinamic/game/game.component';
import { ApiComponent } from './proof/views/dinamic/api/api.component';
import { HeaderComponent } from './proof/views/static/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SelectorComponent } from './proof/views/dinamic/selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    ApiComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
