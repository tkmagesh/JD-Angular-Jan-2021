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
  

  constructor( private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
    this.bugs.push({id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date(2021, 0, 4)})
    this.bugs.push({id : 2, name : 'User actions not recognised', isClosed : true, createdAt : new Date(2020, 11, 4)})
    this.bugs.push({id : 3, name : 'Data integrity checks failed', isClosed : false, createdAt : new Date(2021, 0, 1)})
    this.bugs.push({id : 4, name : 'Application not responding', isClosed : true, createdAt : new Date(2020, 10, 10)})
  }

  onAddNewClick(newBugName : string){
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugs.push(newBug);
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugs = this.bugs.filter(bug => bug !== bugToRemove);
  }

  onBugNameClick(bugToToggle : Bug){
    this.bugOperations.toggle(bugToToggle)
  }

  onRemoveClosedClick(){
    this.bugs = this.bugs.filter(bug => !bug.isClosed);
  }

  getClosedCount() : number {
    return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
  }
}
