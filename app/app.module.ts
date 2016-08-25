import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {CalculatorsComponent} from './pages/calculators/calculators.component';
import {ContactComponent} from './pages/contact/contact.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';



import { routing,appRoutingProviders } from './app.routing';


@NgModule({
  imports: [
    BrowserModule,
    
    routing
  ],
  declarations: [AppComponent,HomeComponent,ContactComponent,ServicesComponent,AboutComponent,LoginComponent
 ,CalculatorsComponent,RegisterComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }