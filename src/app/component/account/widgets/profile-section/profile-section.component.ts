import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoggingOutComponent } from '../../logging-out/logging-out.component';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss'
})

export class ProfileSectionComponent {

  constructor( public modal :NgbModal) {}

  logOut(){
    this.modal.open(LoggingOutComponent,{ windowClass: 'address-details-modal', centered: true })
   }

}
