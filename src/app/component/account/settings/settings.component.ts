import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountDeletionComponent } from './account-deletion/account-deletion.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { ProfileSectionComponent } from '../widgets/profile-section/profile-section.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TitleComponent,BreadcrumbComponent,ProfileSectionComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})

export class SettingsComponent {

  public breadcrumb = {
    title: 'Setting',
    page: 'Home',
    sub_page: 'Setting'
  }

  constructor(public modal: NgbModal) {}

  deleteAccount() {
    this.modal.open(AccountDeletionComponent, { windowClass: 'address-details-modal', centered: true })
  }

}
