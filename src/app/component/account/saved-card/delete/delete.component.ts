import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})

export class DeleteComponent {

  constructor(public modal: NgbModal) {}


}
