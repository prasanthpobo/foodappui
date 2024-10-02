import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Self } from '../interface/self';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelfService {

  constructor(private http: HttpClient) { }

  getSelf(): Observable<Self> {
    return this.http.get<Self>('assets/json/self.json')
  }

}
