import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsAndIndicatorsRoutingModule } from './buttons-and-indicators-routing.module';
import { MatRippleComponent } from './mat-ripple/mat-ripple.component';
import { ButtonsAndIndicatorsComponent } from './buttons-and-indicators/buttons-and-indicators.component';

@NgModule({
  declarations: [MatRippleComponent, ButtonsAndIndicatorsComponent],
  imports: [
    CommonModule,
    ButtonsAndIndicatorsRoutingModule
  ]
})
export class ButtonsAndIndicatorsModule { }
