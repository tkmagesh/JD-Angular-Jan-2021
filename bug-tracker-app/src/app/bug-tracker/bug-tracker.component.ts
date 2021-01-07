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
    this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date(2021, 0, 4)})
    this.bugs.push({id : 2, name : 'User actions not recognised', isClosed : true, createdAt : new Date(2020, 11, 4)})
    this.bugs.push({id : 3, name : 'Data integrity checks failed', isClosed : false, createdAt : new Date(2021, 0, 1)})
    this.bugs.push({id : 4, name : 'Application not responding', isClosed : true, createdAt : new Date(2020, 10, 10)})
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
