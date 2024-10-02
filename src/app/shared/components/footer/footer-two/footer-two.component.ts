import { Component, Input } from '@angular/core';
import { Footer, Logo } from '../../../interface/theme-options';
import { CommonPagesComponent } from '../widgets/common-pages/common-pages.component';
import { SocialMediaComponent } from '../widgets/social-media/social-media.component';

@Component({
  selector: 'app-footer-two',
  standalone: true,
  imports: [CommonPagesComponent,SocialMediaComponent],
  templateUrl: './footer-two.component.html',
  styleUrl: './footer-two.component.scss'
})

export class FooterTwoComponent {

  @Input() footer: Footer;
  @Input() logo: Logo;

}
