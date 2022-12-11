import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inspection } from '../models/dataModel.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) {}
  
  getInspections(): Observable<Inspection[]> {
    return this.http
    .get<Inspection[]>('https://raw.githubusercontent.com/Briella94/LOI/main/db.json')
  }
}