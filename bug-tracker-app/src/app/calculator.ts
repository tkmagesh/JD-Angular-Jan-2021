import { Injectable } from '@angular/core';
import Logger from './logger'

@Injectable({
    providedIn: 'root'
})
export default class Calculator{
    constructor(private logger : Logger){

    }

    add(x :number, y :number):number{
        this.logger.log('Add operation performed')
        return x + y;
    }

    subtract(x :number, y :number):number{
        this.logger.log('Subtract operation performed')
        return x - y;
    }
}