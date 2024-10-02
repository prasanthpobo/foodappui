import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../interface/theme-options';

@Injectable({
  providedIn: 'root'
})

export class FooterPagesService {

  constructor(private http: HttpClient) { }

  getFooterPages() :Observable<Options> {
    return this.http.get<Options>('assets/json/theme-options.json')
  }
  
}
