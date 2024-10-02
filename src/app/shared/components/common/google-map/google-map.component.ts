import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})

export class GoogleMapComponent {

  public openInfo: any;
  public markers: any[];
  public zoom: number;
  public india = { lat: 20.5937, lng: 78.9629 };
  constructor() {
    this.markers = [];
    this.zoom = 2;
  }

  //Street View
  @ViewChild(GoogleMap) map!: GoogleMap;

  ngAfterViewInit() {
    document.getElementById("map") as HTMLElement,
    {
      zoom: 5,
      center: this.india,
    }
  }

}
