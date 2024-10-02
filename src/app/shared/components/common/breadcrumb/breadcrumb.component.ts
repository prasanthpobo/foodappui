import { Component, Input } from '@angular/core';
import { breadcrumb } from '../../../interface/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})

export class BreadcrumbComponent {

  @Input() breadcrumb : breadcrumb;

}
