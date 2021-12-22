import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://peticiones.online/api/products';
  }

  getAll(): Promise<any> {
    return firstValueFrom(
      this.http.get<any>(this.baseUrl)
    )
  }

  create(formValue: any): Promise<any> {
    return firstValueFrom(
      this.http.post<any>(this.baseUrl, formValue)
    );
  }

}
