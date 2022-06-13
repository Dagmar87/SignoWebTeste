import { Votacao } from './../models/votacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/votacaos';

@Injectable({
  providedIn: 'root'
})
export class VotacaoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Votacao[]> {
    return this.http.get<Votacao[]>(baseUrl);
  }

  get(id: any): Observable<Votacao> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
