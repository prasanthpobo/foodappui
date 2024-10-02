import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../../../interface/theme-options';

@Component({
  selector: 'app-useful-links',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './useful-links.component.html',
  styleUrl: './useful-links.component.scss'
})

export class UsefulLinksComponent {

  @Input() footer: Footer;

}
