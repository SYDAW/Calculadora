import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public total: number = 0;
  public numero1: number = 0;
  public numero2: number = 0;

  sumar(): void{
    this.total = this.numero1 + this.numero2;
  }

  restar(): void{
    this.total = this.numero1 - this.numero2;
  }
}
