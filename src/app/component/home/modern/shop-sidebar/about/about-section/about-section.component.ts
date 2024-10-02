import { Component, Input } from '@angular/core';
import { AboutUsData } from '../../../../../../shared/interface/about-us';
import { TitleComponent } from '../../../../../../shared/components/common/title/title.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})

export class AboutSectionComponent {

  @Input() data : AboutUsData;


}
