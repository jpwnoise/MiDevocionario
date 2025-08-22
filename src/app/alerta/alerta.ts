import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  imports: [],
  templateUrl: './alerta.html',
  styleUrl: './alerta.sass'
})
export class Alerta {
  @Input() tipo: 'exito' | 'error' | 'info' | 'warning' = 'info';
  @Input() mensaje: string = '';
}
