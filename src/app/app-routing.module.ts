import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';


const routes: Routes = [
  /* { path: "", component: HomeComponent },*/
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: "listaSeries", component: ListaSeriesComponent },
  //{ path: '**', redirectTo: '/home' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
