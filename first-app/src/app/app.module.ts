import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { CalculatorComponent } from './calculator/calculator.component';

import { CalculatorService } from './calculator/calculator.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  
  //regiter the UI entites of the application (Directives, Pipes & Components)
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    ProductsComponent
  ],

  //regiter the module dependencies
  imports: [
    BrowserModule
  ],

  //register the NON UI entites (services)
  providers: [
    CalculatorService
  ],

  //Top level component(s) in the component tree
  bootstrap: [
    AppComponent, 
    /* GreeterComponent */
  ]

})
export class AppModule { }
