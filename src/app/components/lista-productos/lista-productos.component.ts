import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProducto: Producto[];

  constructor(
    private productosServices: ProductosService
  ) {
    this.arrProducto = [];
  }

  async ngOnInit() {
    try {
      const result = await this.productosServices.getAll();
      this.arrProducto = result;
      console.log(this.arrProducto);
    } catch (err) {
      console.log(err);
    }
  }




}
