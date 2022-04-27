import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <fieldset>
      <legend>Login Component</legend>
      <app-common-buttons></app-common-buttons>
    </fieldset>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
