import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../../../interface/theme-options';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})

export class CompanyComponent {

  @Input() footer: Footer;


}
