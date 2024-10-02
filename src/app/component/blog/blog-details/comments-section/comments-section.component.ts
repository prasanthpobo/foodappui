import { Component, Input } from '@angular/core';
import { BlogDetailsData } from '../../../../shared/interface/blog';

@Component({
  selector: 'app-comments-section',
  standalone: true,
  imports: [],
  templateUrl: './comments-section.component.html',
  styleUrl: './comments-section.component.scss'
})

export class CommentsSectionComponent {

  @Input() data :BlogDetailsData

}
