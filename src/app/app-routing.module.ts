import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaPlayComponent } from './entrada-play/entrada-play.component';
import { EntradaComponent } from './entrada/entrada.component';
import { Sala1ConferenciaComponent } from './sala1-conferencia/sala1-conferencia.component';
import { Sala1Component } from './sala1/sala1.component';
import { SimposiumComponent } from './simposium/simposium.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { EntradaSimposiumComponent } from './entrada-simposium/entrada-simposium.component';
import { CafeteriaComponent } from './Recorrido/cafeteria/cafeteria.component';
import { CentroComputoComponent } from './Recorrido/centro-computo/centro-computo.component';
import { CentroIdiomasComponent } from './Recorrido/centro-idiomas/centro-idiomas.component';
import { DesarrolloComponent } from './Recorrido/desarrollo/desarrollo.component';
import { DireccionComponent } from './Recorrido/direccion/direccion.component';
import { EdificioVComponent } from './Recorrido/edificio-v/edificio-v.component';
import { EdificioWComponent } from './Recorrido/edificio-w/edificio-w.component';
import { ElectricaComponent } from './Recorrido/electrica/electrica.component';
import { IncubadoraComponent } from './Recorrido/incubadora/incubadora.component';
import { LaboratorioEconomicoComponent } from './Recorrido/laboratorio-economico/laboratorio-economico.component';


const routes: Routes = [
  {path: "entrada", component: EntradaComponent},
  {path: "entrando", component: EntradaPlayComponent},
  {path: "sala1", component: Sala1Component},
  {path: "sala1-conferencia", component: Sala1ConferenciaComponent},
  {path: "simposium", component: SimposiumComponent},
  {path: "entrada-simposium", component: EntradaSimposiumComponent},
  {path: "recorrido/cafeteria", component: CafeteriaComponent},
  {path: "recorrido/centro-computo", component: CentroComputoComponent},
  {path: "recorrido/centro-idiomas", component: CentroIdiomasComponent},
  {path: "recorrido/desarrollo", component: DesarrolloComponent},
  {path: "recorrido/direccion", component: DireccionComponent},
  {path: "recorrido/edificio-v", component: EdificioVComponent},
  {path: "recorrido/edificio-w", component: EdificioWComponent},
  {path: "recorrido/electrica", component: ElectricaComponent},
  {path: "recorrido/incubadora", component: IncubadoraComponent},
  {path: "recorrido/lab-economico", component: LaboratorioEconomicoComponent},
  {path: "**", component:EntradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
