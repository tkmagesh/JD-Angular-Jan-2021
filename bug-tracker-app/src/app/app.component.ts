import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTime = new Date()
  title = 'bug-tracker-app';

  constructor(){
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000)
  }
}
