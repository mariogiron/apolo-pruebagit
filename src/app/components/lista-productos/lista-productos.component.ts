import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProducto: Producto[];

  constructor() {
    this.arrProducto = [];
  }

  ngOnInit(): void {
  }

}