import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugServerService } from './bugServer.service';
import { Observable } from 'rxjs';


@Injectable()
export class BugOperationsService{
	constructor(private bugServer : BugServerService){

	}
	getAll() : Observable<Bug[]> {
		return this.bugServer.getAll();
	}
	createNew(bugName : string) : Observable<Bug>{
		let newBug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date(),
			desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquam id pariatur ipsa expedita nesciunt doloribus facilis architecto quisquam totam veniam odio, minima, labore deleniti, neque nam quia amet eveniet.'
		};
		return this.bugServer.save(newBug);
	}
	toggle(bugToToggle : Bug) : Observable<Bug> {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugServer.save(toggledBug);
	}
	remove(bug : Bug){
		this.bugServer
			.remove(bug)
			.subscribe(() => {
			});
		
	}
}