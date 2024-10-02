import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../../../../../shared/interface/self';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-address',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-edit-address.component.html',
  styleUrl: './add-edit-address.component.scss'
})

export class AddEditAddressComponent {

  @Input() data: Address;
  public myGroup: FormGroup;

  constructor(public modalServices: NgbModal) {
      this.myGroup = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        address: new FormControl(),
        city: new FormControl(),
        country: new FormControl(),
        phone_number: new FormControl(),
        zip: new FormControl(),
      })
  }


  ngOnInit(): void {
    this.myGroup.patchValue({
      first_name: this.data?.first_name,
      last_name: this.data?.last_name,
      address: this.data?.address,
      city: this.data?.city,
      country: this.data?.country,
      phone_number: this.data?.phone_number,
      zip: this.data?.zip,
    })
  }


}
