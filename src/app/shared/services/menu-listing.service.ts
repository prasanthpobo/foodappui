import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { menuListing } from '../interface/menu-listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuListingService {

  constructor(private http: HttpClient) { }

  getMenuListing() :Observable<menuListing> {
    return this.http.get<menuListing>('assets/json/menu-listing.json')
  }

}
