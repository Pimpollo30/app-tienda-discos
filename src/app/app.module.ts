import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarDiscoComponent } from './pages/agregar-disco/agregar-disco.component';
import { VerDiscosComponent } from './pages/ver-discos/ver-discos.component';
import { EditarDiscoComponent } from './pages/editar-disco/editar-disco.component';
import { ListarDiscosComponent } from './pages/listar-discos/listar-discos.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarDiscoComponent,
    VerDiscosComponent,
    EditarDiscoComponent,
    ListarDiscosComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
