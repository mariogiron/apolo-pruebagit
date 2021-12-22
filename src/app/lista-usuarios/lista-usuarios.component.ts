import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  arrUsuarios: User[];

  constructor() {
    this.arrUsuarios = new Array();
  }

  ngOnInit(): void {
  }

}
