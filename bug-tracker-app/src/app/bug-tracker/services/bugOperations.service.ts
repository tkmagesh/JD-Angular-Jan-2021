import { Bug } from "../models/bug";

export class BugOperationsService{
    private _currentBugId = 0;

    createNew(bugName : string) : Bug {
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        }
        return newBug;
    }

    toggle(bugToToggle : Bug) : Bug {
       return { ...bugToToggle, isClosed : !bugToToggle.isClosed }
    }
}