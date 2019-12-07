import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  value: number;

  lastButtonType: {
    value: string | number,
    type: ButtonType
  };

  side: [number, number];
  index: number;

  constructor() {}

  ngOnInit() {
    this.initialize();
  }

  handleClick(input, operator) {

    debugger;

    if(operator) {

      if(this.lastButtonType.type === ButtonType.OPERATOR) return;
      
      if(input === 'AC') {
        this.initialize();
      } else {
        
        this.lastButtonType = {
          value: input,
          type: ButtonType.OPERATOR
        };

        this.calculate(input);
      }

    } else {
      debugger;
      if(this.lastButtonType.type === ButtonType.NUMBER || this.lastButtonType.type === ButtonType.CLEAR) {

        this.side[this.index] = (this.side[this.index] * 10) + input;    

      } else  if(this.lastButtonType.type === ButtonType.OPERATOR) {
        this.side[this.index] = input;
      }
      this.lastButtonType = {
        value: input,
        type: ButtonType.NUMBER
      }
    }
  }

  initialize() {

    this.value = 0;
    
    this.lastButtonType = {
      value: 0,
      type: ButtonType.CLEAR
    };

    this.side = [0, 0];
    this.index = 0;
  }

  calculate(operator) {

    // if(this.value === 0) {
    //   this.index === 0 ? this.index = 1: this.index = 0;
    //   return;
    // } else 
    {
      switch(operator) {
        case '+' : {
          this.value = this.side[0] + this.side[1];
          this.side[0] = this.value;
          this.index = 0;
          this.side[1] = 0;
          return;
        }
        case '-' : {
          this.value = this.side[0] - this.side[1];
          this.side[0] = this.value;
          this.index = 0;
          this.side[1] = 0;
          return;
        }
        case '*' : {
          this.value = this.side[0] * this.side[1];
          this.side[0] = this.value;
          this.index = 0;
          this.side[1] = 0;
          return;
        }
        case '/' : {
          this.value = Math.round(this.side[0] / this.side[1]);
          this.side[0] = this.value;
          this.index = 0;
          this.side[1] = 0;
          break;
        }
      }
    }
    
  }

}

export enum ButtonType {
  NUMBER = 'NUMBER',
  OPERATOR = 'OPERATOR',
  CLEAR = 'CLEAR'
}
