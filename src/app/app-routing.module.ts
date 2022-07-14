import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { AgregarDiscoComponent } from './pages/agregar-disco/agregar-disco.component';
import { EditarDiscoComponent } from './pages/editar-disco/editar-disco.component';
import { ListarDiscosComponent } from './pages/listar-discos/listar-discos.component';
import { VerDiscosComponent } from './pages/ver-discos/ver-discos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ver-discos' },
  { path: 'ver-discos', component: VerDiscosComponent},
  { path: 'agregar-disco', component: AgregarDiscoComponent},
  { path: 'listar-discos', component: ListarDiscosComponent},
  { path: 'acerca', component: AcercaDeComponent },
  { path: 'editar-disco/:id', component: EditarDiscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
