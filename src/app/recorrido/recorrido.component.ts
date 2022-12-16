import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.css']
})
export class RecorridoComponent {
valor: String = ""
constructor(private rutaActiva: ActivatedRoute){
  this.valor = this.rutaActiva.snapshot.paramMap.get('lugar')!
}
ngOnInit(): void {
  
  this.valor = this.rutaActiva.snapshot.paramMap.get('lugar')!
  
}


}
