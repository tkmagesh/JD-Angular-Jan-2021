import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn : 'root'
})
export class BugApiService{
    constructor(private http : HttpClient){

    }
    getAll() : Observable<Bug[]> {
        return this.http
            .get<Bug[]>(environment.bugApiEndpoint)
    }

    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.http
                .post<Bug>(environment.bugApiEndpoint, bugData)
        } else {
            return this.http
                .put<Bug>(`${environment.bugApiEndpoint}/${bugData.id}`, bugData)   
        }
    }

    remove(bugData : Bug) : Observable<any>{
        return this.http
                .delete<any>(`${environment.bugApiEndpoint}/${bugData.id}`)   
    }
}