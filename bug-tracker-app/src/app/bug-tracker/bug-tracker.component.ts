import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(newBugName : string){
    this.bugs.push(newBugName);
  }
  
}
