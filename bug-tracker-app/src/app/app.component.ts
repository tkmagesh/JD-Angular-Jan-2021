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
    //getting the data
    /* this.http
      .get('http://localhost:3000/bugs')
      .subscribe(response => console.table(response)); */

    //to add a new bug
      /* const newBugData = {
        id : 0,
        name : 'Test Bug for JD',
        isClosed : false,
        createdAt : new Date()
      }
      this.http
        .post('http://localhost:3000/bugs', newBugData)
        .subscribe(newBug => console.log(newBug)) */

      //updating an existing bug

      /* const updatedBug = {
        id : 4,
        name : 'Test Bug for JD - updated',
        isClosed : true,
        createdAt : new Date()
      }
      this.http
        .put(`http://localhost:3000/bugs/${updatedBug.id}`, updatedBug)
        .subscribe(newBug => console.log(newBug)) */

      //removing an existing bug
      /* this.http
        .delete('http://localhost:3000/bugs/4')
        .subscribe(response => console.log('bug removed')); */
  }
}
