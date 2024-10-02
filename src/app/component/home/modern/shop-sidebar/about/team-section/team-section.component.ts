import { Component, Input } from '@angular/core';
import { OurTeam } from '../../../../../../shared/interface/about-us';
import { TitleComponent } from '../../../../../../shared/components/common/title/title.component';

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})

export class TeamSectionComponent {

 @Input() data :OurTeam[];

}
