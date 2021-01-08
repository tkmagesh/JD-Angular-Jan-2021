import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Bug } from "../../models/bug";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" #txtNewBugName (input)="newBugName = txtNewBugName.value">
            <span> [ {{newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick()">
        </section>
    `,
    styleUrls : ['bug-edit.component.css']
})
export class BugEditComponent implements OnInit{
    newBugName : string = '';

    @Output()
    bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }
    ngOnInit(): void {
        
    }
    
    onAddNewClick(){
        /* const newBug = this.bugOperations.createNew(this.newBugName);
        //this.bugs.push(newBug);
        //this.bugs = [...this.bugs, newBug];
        this.bugAdded.emit(newBug); */

        this.bugOperations
            .createNew(this.newBugName)
            .subscribe(newBug => {
                this.bugAdded.emit(newBug);
            });
    }

}