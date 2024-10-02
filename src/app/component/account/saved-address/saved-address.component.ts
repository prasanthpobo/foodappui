import { Component } from '@angular/core';
import { SelfService } from '../../../shared/services/self.service';
import { Self } from '../../../shared/interface/self';
import { CommonAddressComponent } from '../../../shared/components/common/common-address/common-address.component';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { ProfileSectionComponent } from '../widgets/profile-section/profile-section.component';

@Component({
  selector: 'app-saved-address',
  standalone: true,
  imports: [CommonAddressComponent,BreadcrumbComponent,ProfileSectionComponent],
  templateUrl: './saved-address.component.html',
  styleUrl: './saved-address.component.scss'
})

export class SavedAddressComponent {

  public self: Self;

  public breadcrumb = {
    title: 'Saved Address',
    page: 'Home',
    sub_page: 'Saved Address'
  }

  constructor(public selfService: SelfService) { }

  ngOnInit() {
    this.selfService.getSelf().subscribe(Response => {
      this.self = Response;
    })
  }

}
