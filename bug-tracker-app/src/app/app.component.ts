import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* currentTime = new Date() */
  title = 'bug-tracker-app';

  constructor(private http : HttpClient) {
    /* setInterval(() => {
      this.currentTime = new Date();
    }, 1000) */
  }

  ngOnInit() {
    this.http
      .get('http://localhost:3000/bugs')
      .subscribe(response => console.table(response));
  }
}
