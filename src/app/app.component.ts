import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular-Material-Tutorial</h1>

    <app-counter #counter></app-counter>
    <button (click) = 'counter.increment()'>Add number</button>
    <button (click) = 'counter.show()'>Show Counter</button>
    <button (click) = 'counter.hide()'>Hide Counter</button>
  `,
  styles: [
    `h1 {
      text-align: center;
      padding: 20px;
    }`,
    `button {
      border: 0;
      outline: 0;
      padding: 10px;
      border-radius: 8px;
      display: block;
      width: 150px;
      margin: 10px auto;
  }`
  ]
})
export class AppComponent {}
