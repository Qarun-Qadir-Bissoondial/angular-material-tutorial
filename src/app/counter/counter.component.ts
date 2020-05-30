import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>My Counter - {{showNumber ? "shown" : "hidden"}}</h2>
  <p *ngIf = 'showNumber'>{{num}}</p>`,
  styles: [':host { text-align: center; }']
})
export class CounterComponent {

  num: number = 0;
  showNumber: boolean = true;
  
  constructor() { }

  increment() { this.num++; }
  show() { this.showNumber = true; }
  hide() { this.showNumber = false; } 
  
  private toggle() { this.showNumber = !this.showNumber; }

}
