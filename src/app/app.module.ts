import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { EntradaPlayComponent } from './entrada-play/entrada-play.component';
import { Sala1Component } from './sala1/sala1.component';
import { Sala1ConferenciaComponent } from './sala1-conferencia/sala1-conferencia.component';
import { SimposiumComponent } from './simposium/simposium.component';
import { EntradaSimposiumComponent } from './entrada-simposium/entrada-simposium.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
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


@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    EntradaPlayComponent,
    Sala1Component,
    Sala1ConferenciaComponent,
    SimposiumComponent,
    EntradaSimposiumComponent,
    RecorridoComponent,
    CafeteriaComponent,
    CentroComputoComponent,
    CentroIdiomasComponent,
    DesarrolloComponent,
    DireccionComponent,
    EdificioVComponent,
    EdificioWComponent,
    ElectricaComponent,
    IncubadoraComponent,
    LaboratorioEconomicoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
