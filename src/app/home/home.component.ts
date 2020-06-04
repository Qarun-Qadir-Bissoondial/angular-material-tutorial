import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sections: {title: string, link: string}[] = [
    { title: 'Butttons and Indicators', link: '/buttons-and-indicators' }
  ];

}
