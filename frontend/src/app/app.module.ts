import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { LoginComponent } from './login/login.component';
import { DivineHomeComponent } from './divine-home/divine-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DivineHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
