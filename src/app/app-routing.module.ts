import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './proof/views/dinamic/api/api.component';
import { GameComponent } from './proof/views/dinamic/game/game.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'api',
    component: ApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
