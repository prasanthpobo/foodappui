import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../interface/brand';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  constructor(private http: HttpClient) { }

  getBrandForYou() :Observable<Brand> {
    return this.http.get<Brand>('assets/json/brand.json')
  }

}
