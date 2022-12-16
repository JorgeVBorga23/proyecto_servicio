import { Component } from '@angular/core';

@Component({
  selector: 'app-entrada-simposium',
  templateUrl: './entrada-simposium.component.html',
  styleUrls: ['./entrada-simposium.component.css']
})
export class EntradaSimposiumComponent {

  displayContenido = "hidden"
  mostrarContenido(){
    this.displayContenido = "visible"
  }
}
