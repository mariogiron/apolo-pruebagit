import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaUsuariosComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
