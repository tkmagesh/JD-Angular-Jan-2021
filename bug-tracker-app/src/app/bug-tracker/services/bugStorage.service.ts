import { Bug } from "../models/bug";

export class BugStorageService{
    private storage = window.localStorage;
    private _currentBugId = 0;

    getAll () : Bug[] {
        const bugs = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            let key = this.storage.key(index);
            if (key?.startsWith('bug-')){
                const value = this.storage.getItem(key);
                if (value){
                    const bug = JSON.parse(value);
                    this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
                    bugs.push(bug);
                }
            }
        }    
        return bugs;
    }
    save(bugData : Bug) : Bug {
        if (bugData.id === 0){
            bugData.id = ++this._currentBugId;
        }
        this.storage.setItem(`bug-${bugData.id}`, JSON.stringify(bugData));
        return bugData;
    }
    remove (bugData : Bug) : void {
        this.storage.removeItem(`bug-${bugData.id}`);
    }
}