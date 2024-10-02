import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-deletion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account-deletion.component.html',
  styleUrl: './account-deletion.component.scss'
})

export class AccountDeletionComponent {

  constructor(public modal: NgbModal) {}

}
