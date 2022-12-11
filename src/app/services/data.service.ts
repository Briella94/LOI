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
    .get<Inspection[]>('https://api.npoint.io/3818fd3df9a8109c8399')
  }
}