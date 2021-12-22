import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interface/serie.interface';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {


  arrSeries: Serie[] = new Array();
  constructor() { }

  ngOnInit(): void {

  }

}
