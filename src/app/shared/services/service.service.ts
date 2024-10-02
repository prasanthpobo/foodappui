import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service } from '../interface/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getService() :Observable<service> {
    return this.http.get<service>('assets/json/services.json')
  }

}
