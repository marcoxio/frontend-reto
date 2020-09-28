import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reporte } from '../shared/models/reporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private baseUrl = 'http://localhost:9081/api/v1/reporte';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(`${this.baseUrl}`);
  }

  save(reporte: Reporte) {
    console.log(reporte);
    return this.http.post(`${this.baseUrl}`, reporte);
  }

}
