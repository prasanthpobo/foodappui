import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { TagsComponent } from './tags/tags.component';
import { Blog } from '../../../../shared/interface/blog';

@Component({
  selector: 'app-blog-filter',
  standalone: true,
  imports: [NgbAccordionModule, CategoriesComponent, RecentPostComponent, TagsComponent],
  templateUrl: './blog-filter.component.html',
  styleUrl: './blog-filter.component.scss'
})

export class BlogFilterComponent {

  @Input() boxClass: string;
  @Input() shopClass: string;
  @Input() blog: Blog;

}
