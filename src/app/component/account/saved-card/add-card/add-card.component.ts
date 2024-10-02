import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss'
})

export class AddCardComponent {

  constructor(public modal: NgbModal) { }

}
