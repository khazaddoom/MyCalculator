import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: number;


  side: [number, number];
  index: number;

  lastOperator: null;

  constructor() { }

  ngOnInit() {
    this.initialize();
  }

  handleClick(input, operator) {
    debugger;
    if (operator) {
      if(this.index === 1) {

        this.value = this.calculate();
        this.side[0] = this.value;
        this.side[1] = 0;

      } else {
        this.lastOperator = input;
        this.index = 1;
      }     
    } else {
      this.side[this.index] = (this.side[this.index] * 10) + input;
    }

  }

  initialize() {

    this.value = 0;
    this.side = [0, 0];
    this.index = 0;

  }

  calculate() {

    let result = 0;

    if(!this.lastOperator) return result;

    switch(this.lastOperator) {
      
      case '+':
        result = this.side[0] + this.side[1];
        break;
    
      case '*':
          result = this.side[0] * this.side[1];
          break;

      default:
        break;
    }

    return result;
  }


}

export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
  CLEAR = 'CLEAR'
}
