import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangeEditComponent } from './change-edit/change-edit.component';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { User } from '../../../shared/interface/self';
import { SelfService } from '../../../shared/services/self.service';
import { ProfileSectionComponent } from '../widgets/profile-section/profile-section.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-change-profile',
  standalone: true,
  imports: [BreadcrumbComponent, ReactiveFormsModule, FormsModule,TitleComponent,ProfileSectionComponent,RouterModule],
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.scss'
})

export class ChangeProfileComponent {

  public breadcrumb = {
    title: 'Profile',
    page: 'Home',
    sub_page: 'Profile'
  }

  public user: User[];
  public myForm: FormGroup;
  constructor(public model: NgbModal, public selfServices: SelfService) {
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl(),
    })
  }

  ngOnInit() {
    this.selfServices.getSelf().subscribe(response => {
      this.user = response.user;
    })
  }

  openModal(value: string) {
    let data = this.user.filter(x => x.label === value);
    const result = Object.assign({}, ...data);
    const modal = this.model.open(ChangeEditComponent, { windowClass: 'profile-modal', centered: true })
    modal.componentInstance.data = result;

  }

}
