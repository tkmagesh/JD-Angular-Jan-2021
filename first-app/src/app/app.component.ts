import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl & styleUrls -> presenation
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Data to be presented
  title = 'first-app';
  currentTime = Date();
  userChoice = '';

  constructor(){
    setTimeout(() => {
      this.title = 'My First App'
    }, 10000)

    setInterval(() => {
      this.currentTime = Date()
    },1000)
  }

  //NO User Interaction Logic
}
