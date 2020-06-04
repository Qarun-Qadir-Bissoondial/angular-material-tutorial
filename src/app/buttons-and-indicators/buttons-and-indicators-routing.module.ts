import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ButtonsAndIndicatorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsAndIndicatorsRoutingModule { }
