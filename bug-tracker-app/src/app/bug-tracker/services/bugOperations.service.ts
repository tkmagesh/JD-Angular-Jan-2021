import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { BugApiService } from "./bugApi.service";
//import { BugStorageService } from "./bugStorage.service";

@Injectable()

export class BugOperationsService{

    constructor(private bugApi : BugApiService){

    }

    getAll() : Observable<Bug[]>{
        return this.bugApi.getAll();
    }
    
    createNew(bugName : string) : Observable<Bug> {
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bug : Bug) : Observable<any>{
        return this.bugApi.remove(bug);
    }
}

//using the localStorage
/* export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){

    }

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }
    
    createNew(bugName : string) : Bug {
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return this.bugStorage.save(newBug);
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugStorage.save(toggledBug);
    }

    remove(bug : Bug){
        this.bugStorage.remove(bug);
    }
} */