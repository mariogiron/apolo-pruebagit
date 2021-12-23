import { Injectable } from '@angular/core';
import { Serie } from './interfaces/serie.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'peticiones.online/api/series';

  }

  getAll(): Promise<Serie[]> {
    return lastValueFrom(this.httpClient.get<Serie[]>(this.baseUrl));
  }


}
