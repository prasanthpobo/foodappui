import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Logo } from '../../../../interface/theme-options';
import { RouterModule } from '@angular/router';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-logo-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logo-section.component.html',
  styleUrl: './logo-section.component.scss'
})

export class LogoSectionComponent {

  @Input() logo : Logo;
  @Input() routePath : string;

  constructor(public modalServices: NgbModal) {}

  openLocation() {
    this.modalServices.open(LocationComponent, { windowClass: 'location-modal' , centered: true ,  backdrop : 'static'})
  }

}
