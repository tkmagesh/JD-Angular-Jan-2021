import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  
  //regiter the UI entites of the application (Directives, Pipes & Components)
  declarations: [
    AppComponent
  ],

  //regiter the module dependencies
  imports: [
    BrowserModule
  ],

  //register the NON UI entites (services)
  providers: [],

  //Top level component(s) in the component tree
  bootstrap: [AppComponent]
})
export class AppModule { }
