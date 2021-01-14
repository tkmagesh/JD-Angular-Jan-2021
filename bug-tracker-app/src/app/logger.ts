import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export default class Logger {
    log(message: string){
        console.log(message);
    }
}