import { Component, Input } from '@angular/core';
import { TagsData } from '../../../../../shared/interface/blog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})

export class TagsComponent {

  @Input() data :TagsData[];

}
