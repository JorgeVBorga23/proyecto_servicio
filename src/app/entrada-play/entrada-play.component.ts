import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-entrada-play',
  templateUrl: './entrada-play.component.html',
  styleUrls: ['./entrada-play.component.css']
})
export class EntradaPlayComponent {
  displayContenido = "none"
  displayVideo="block"
  mostrarContenido(){
    this.displayContenido = "block"
    this.displayVideo ="none"
  }
}
