import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick() : void {
    this.result = this.n1 + this.n2;
  }

  onSubtractClick(): void {
    this.result = this.n1 - this.n2;
  }

  onMultiplyClick(): void {
    this.result = this.n1 * this.n2;
  }

  onDivideClick(): void {
    this.result = this.n1 / this.n2;
  }
}
