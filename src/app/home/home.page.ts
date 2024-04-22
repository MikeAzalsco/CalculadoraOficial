import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  operacao = ""
  operandoa : number = 0
  operandob : number = 0
  resposta : number = 0
  constructor() {}

  limpar(){
    this.operacao = ""
    this.operandoa = 0
    this.operandob = 0
    this.resposta = 0
  }
    
  ativarSoma(){
    this.operacao = "+"
  }

  ativarSub(){
    this.operacao = "-"
  }

  ativarMult(){
    this.operacao = "*"
  }

  ativarDivs(){
    this.operacao = "/"
  }

  calcular() {
    switch(this.operacao) {
      case "+":
        this.resposta = this.operandoa + this.operandob;
        break;
      case "-":
        this.resposta = this.operandoa - this.operandob;
        break;
      case "*":
        this.resposta = this.operandoa * this.operandob;
        break;
      case "/":
        this.resposta = this.operandoa / this.operandob;
    }
}


}
