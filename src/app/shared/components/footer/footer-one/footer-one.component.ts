import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer, Logo } from '../../../interface/theme-options';
import { CommonPagesComponent } from '../widgets/common-pages/common-pages.component';
import { SocialMediaComponent } from '../widgets/social-media/social-media.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-one',
  standalone: true,
  imports: [CommonPagesComponent,SocialMediaComponent,RouterModule,CommonModule],
  templateUrl: './footer-one.component.html',
  styleUrl: './footer-one.component.scss'
})

export class FooterOneComponent {

  @Input() footer: Footer;
  @Input() logo: Logo;
  @Input() routePath: string;

}
