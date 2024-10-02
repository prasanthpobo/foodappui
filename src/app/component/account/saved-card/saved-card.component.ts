import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCardComponent } from './add-card/add-card.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { ProfileSectionComponent } from '../widgets/profile-section/profile-section.component';

export interface card {
  id: number;
  title: string;
  account_number: number;
  expire: string;
  user_name: string;
  class: string
}

@Component({
  selector: 'app-saved-card',
  standalone: true,
  imports: [BreadcrumbComponent,TitleComponent,ProfileSectionComponent],
  templateUrl: './saved-card.component.html',
  styleUrl: './saved-card.component.scss'
})

export class SavedCardComponent {

  public breadcrumb = {
    title: 'Saved Card',
    page: 'Home',
    sub_page: 'Saved Card'
  }

  public savedCard: card[] = [
    {
      id: 1,
      title: "CREDIT CARD",
      account_number: 5322256410111202,
      expire: "12/26",
      user_name: "Nathaniel Ellis",
      class: 'color-1'
    },
    {
      id: 2,
      title: "CREDIT CARD",
      account_number: 5322256410111234,
      expire: "2/28",
      user_name: "Mike Jonathan",
      class: 'color-2'
    },
    {
      id: 3,
      title: "CREDIT CARD",
      account_number: 5322256410114528,
      expire: "10/25",
      user_name: "John Kathryn",
      class: 'color-3'
    },
  ]

  constructor(public modal: NgbModal) { }

  addCard() {
    this.modal.open(AddCardComponent, { centered: true, windowClass: 'address-details-modal' })
  }

  Edit(id: number) {
    let data = this.savedCard.find(ele => ele.id === id);
    const modal = this.modal.open(EditComponent, { centered: true, windowClass: 'address-details-modal' })
    modal.componentInstance.data = data;
  }

  Delete() {
    this.modal.open(DeleteComponent, { centered: true, windowClass: 'address-details-modal' })
  }
}
