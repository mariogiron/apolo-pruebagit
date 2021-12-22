import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = 'http://peticiones.online/api/users'
  }
  
  getAll(): Promise<any>{
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }

  create(userData: []): Promise<any>{
    return lastValueFrom(this.httpClient.post<any>(this.baseUrl, userData))
  }

}
