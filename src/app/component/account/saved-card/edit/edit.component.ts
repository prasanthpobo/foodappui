import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { card } from '../saved-card.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})

export class EditComponent {

  @Input() data: card;
  public myGroup: FormGroup;

  constructor(public modal: NgbModal) {
    this.myGroup = new FormGroup({
      user_name: new FormControl(),
      account_number: new FormControl(),
    })
  }

  ngOnInit(): void {  
    this.myGroup.patchValue({
      user_name: this.data.user_name,
      account_number: this.data.account_number,
    })
  }
}
