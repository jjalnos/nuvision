import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sean Drane';

  slides = [
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'},
    {'image': 'https://picsum.photos/seed/picsum/1200/300'}
  ];
}
