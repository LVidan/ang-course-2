import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login.component';
import { CommonButtonsComponent } from './components/common-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommonButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
