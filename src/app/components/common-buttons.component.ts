import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-buttons',
  templateUrl: './common-buttons.component.html',
  styles: [
    '.red { background-color: red; color: #fff }',
    '.blue { background-color: blue; color: #fff }',
    'button { padding: 15px 20px; margin: 10px; }'
  ]
})
export class CommonButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  btnColor: string;

  changeBackground(color: string): void {
    if (color === 'red') {
      this.btnColor = color;
    } else if (color === 'blue') {
      this.btnColor = color;
    }
  }
}
