import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from '../model/Departement';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiUrl = 'http://localhost:8089/kaddem/departement';

  constructor(private http: HttpClient) { }

  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.apiUrl}/retrieve-all-departements`);
  }

  addDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(`${this.apiUrl}/add-departement`, departement);
  }

  updateDepartement(departement: Departement): Observable<Departement> {
    return this.http.put<Departement>(`${this.apiUrl}/update-departement`, departement);
  }

  deleteDepartement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove-departement/${id}`);
  }
}