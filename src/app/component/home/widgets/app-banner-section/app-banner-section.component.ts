import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  standalone: true,
  imports: [],
  templateUrl: './app-banner-section.component.html',
  styleUrl: './app-banner-section.component.scss'
})

export class AppBannerSectionComponent {

  @Input() type : string;

}
