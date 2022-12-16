import { Component } from '@angular/core';

@Component({
  selector: 'app-sala1',
  templateUrl: './sala1.component.html',
  styleUrls: ['./sala1.component.css']
})
export class Sala1Component {

  displayContenido = "hidden"
  mostrarContenido(){
    this.displayContenido = "visible"
  }
}
