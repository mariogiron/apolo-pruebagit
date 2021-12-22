import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interface/serie.interface';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  arrSeries: Serie[];

  constructor() {
    this.arrSeries = new Array(
      {
        id: 1,
        title: 'La vida es bella',
        creador: 'autor1'

      },
      {
        id: 2,
        title: 'El grinch',
        creador: 'autor2'

      },
      {
        id: 3,
        title: 'El hombre manos de tijera',
        creador: 'autor3'

      }
    )
  }

  ngOnInit(): void {

  }

}
