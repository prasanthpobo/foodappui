import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutUs } from '../interface/about-us';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AboutUsService {

  constructor(private http: HttpClient) { }

  getAboutUs(): Observable<AboutUs> {
    return this.http.get<AboutUs>('assets/json/about-us.json')

  }

}
