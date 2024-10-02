import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../../../interface/theme-options';

@Component({
  selector: 'app-top-brands',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-brands.component.html',
  styleUrl: './top-brands.component.scss'
})

export class TopBrandsComponent {

  @Input() footer: Footer;

}
