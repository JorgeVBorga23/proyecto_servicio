import { Component } from '@angular/core';

@Component({
  selector: 'app-sala1-conferencia',
  templateUrl: './sala1-conferencia.component.html',
  styleUrls: ['./sala1-conferencia.component.css']
})
export class Sala1ConferenciaComponent {

  displayContenido = "hidden"
  mostrarContenido() {
    this.displayContenido = "visible"
  }
}
