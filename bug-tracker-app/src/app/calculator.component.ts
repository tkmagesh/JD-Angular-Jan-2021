import { Component } from '@angular/core';
import Calculator from './calculator';

@Component({
    selector : 'app-calculator',
    template : `
        <div>
            <label i18n="@@calculator-label-1">Number : 1</label>
            <input type="number" #txtN1 (change)="n1 = txtN1.valueAsNumber" />
        </div>
        <div>
            <label i18n="@@calculator-label-2">Number : 2</label>
            <input type="number" #txtN2 (change)="n2 = txtN2.valueAsNumber" />
        </div>
        <input type="button" value="Add" (click)="onAddClick()">
        <input type="button" value="Subtract" (click)="onSubtractClick()">
        <div>{{result}}</div>
    `
})
export class CalculatorComponent{
    n1 : number = 0;
    n2 : number = 0;
    result : number = 0;

    constructor(private calculator : Calculator){

    }

    onAddClick(){
        this.result = this.calculator.add(this.n1 ,  this.n2);
    }
    onSubtractClick(){
        this.result = this.calculator.subtract(this.n1 , this.n2);
    }
}