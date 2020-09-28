import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calculo } from '../shared/models/calculo';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  private baseUrl = 'http://localhost:9081/api/v1';
  constructor(private http: HttpClient) { }

  getCalculo(idTecnico: string, semana: number) {
    console.log(`${this.baseUrl}/calculo/idTecnico/${idTecnico}/semana/${semana}`);
    return this.http.get<Calculo[]>(`${this.baseUrl}/calculo/idTecnico/${idTecnico}/semana/${semana}`);
  }
}
