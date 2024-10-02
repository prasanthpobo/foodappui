import { Component, Input, input } from '@angular/core';
import { Services } from '../../../../../../shared/interface/about-us';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss'
})

export class ServiceSectionComponent {

  @Input() data: Services[];

}
