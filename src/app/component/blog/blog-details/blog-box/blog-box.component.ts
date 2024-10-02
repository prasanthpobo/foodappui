import { Component, Input } from '@angular/core';
import { BlogDetailsData } from '../../../../shared/interface/blog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-box.component.html',
  styleUrl: './blog-box.component.scss'
})

export class BlogBoxComponent {

  @Input() data :BlogDetailsData


}
