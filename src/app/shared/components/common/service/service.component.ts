import { Component, Input } from '@angular/core';
import { serviceData } from '../../../interface/service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})

export class ServiceComponent {
 
  @Input() type : string;
  public serviceData: serviceData[];
  public homeFour: serviceData[];
  
  constructor(public service: ServiceService) {}

  ngOnInit() {
    this.service.getService().subscribe(response => {
      this.serviceData = response.service;
      this.homeFour = response.homeFour;
    })
  }

}
