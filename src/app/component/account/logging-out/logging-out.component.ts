import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logging-out',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logging-out.component.html',
  styleUrl: './logging-out.component.scss'
})

export class LoggingOutComponent {

  constructor(public modal :NgbModal){}


}
