import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  bugs : Bug[] = [];
  sortAttr : string = 'id';
  isDesc : boolean = false;
  

  constructor( private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
    
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  onBugNameClick(bugToToggle : Bug){
    const toggledBug = this.bugOperations.toggle(bugToToggle)
    this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  onNewBugAdded(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }
 
}
