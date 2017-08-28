import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpClient } from './httpInterceptor.component'
import {Http, Headers, HttpModule} from '@angular/http';
import { loginComponent } from './login.component';
import { registercomponent } from './register.component';
import {routing} from './app.routing'
import { taskComponent }  from './tasks.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgSemanticModule } from 'ng-semantic';


@NgModule({
  imports:      [ BrowserModule ,FormsModule, HttpModule,routing, Ng2OrderModule, NgSemanticModule  ],
  declarations: [ AppComponent,loginComponent,registercomponent,taskComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
