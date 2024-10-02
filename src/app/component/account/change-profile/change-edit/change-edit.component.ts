import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../shared/interface/self';

@Component({
  selector: 'app-change-edit',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './change-edit.component.html',
  styleUrl: './change-edit.component.scss'
})

export class ChangeEditComponent {

  @Input() data: User;
  public myGroup: FormGroup;

  constructor(public model: NgbModal) {
    this.myGroup = new FormGroup({
      form: new FormGroup({
        value: new FormControl()
      }),
      password: new FormGroup({
        current_password: new FormControl(),
        new_password: new FormControl(),
        confirm_password: new FormControl(),
      })
    })
  }

  ngOnInit(): void {
    this.myGroup.patchValue({
      form: {
        value: this.data?.value,
      }
    })
  }

}
