import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { home } from '../interface/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getClassicData() :Observable<home> {
    return this.http.get<home>('assets/json/classic.json')
  }

  getEleganceData() :Observable<home> {
    return this.http.get<home>('assets/json/elegance.json')
  }

  getModernData() :Observable<home> {
    return this.http.get<home>('assets/json/modern.json')
  }

  getMinimalData() :Observable<home> {
    return this.http.get<home>('assets/json/minimal.json')
  }

  getCompactData() :Observable<home> {
    return this.http.get<home>('assets/json/compact.json')
  }
  getClassicDataAPI() :Observable<any> {
    return this.http.get<any>('https://foodappapi-drdo.onrender.com/api/v1/products')
  }
}
