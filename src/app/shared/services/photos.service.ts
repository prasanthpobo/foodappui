import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { photos } from '../interface/photos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() :Observable<photos> {
    return this.http.get<photos>('assets/json/photos.json')
  }

}
