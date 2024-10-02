import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menuGrid } from '../interface/menu-grid';

@Injectable({
  providedIn: 'root'
})
export class MenuGridService {

  constructor(private http: HttpClient) { }

  getMenuGrid() :Observable<menuGrid> {
    return this.http.get<menuGrid>('assets/json/menu-grid.json')
  }

}
