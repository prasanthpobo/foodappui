import { Component, Input } from '@angular/core';
import { Footer } from '../../../../interface/theme-options';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})

export class SocialMediaComponent {

  @Input() footer: Footer;

}
