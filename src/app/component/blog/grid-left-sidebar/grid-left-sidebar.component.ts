import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { Blog } from '../../../shared/interface/blog';
import { BlogService } from '../../../shared/services/blog.service';
import { BlogFilterComponent } from '../widgets/blog-filter/blog-filter.component';
import { DetailsBlogComponent } from '../widgets/details-blog/details-blog.component';

@Component({
  selector: 'app-grid-left-sidebar',
  standalone: true,
  imports: [BreadcrumbComponent, BlogFilterComponent, DetailsBlogComponent],
  templateUrl: './grid-left-sidebar.component.html',
  styleUrl: './grid-left-sidebar.component.scss'
})

export class GridLeftSidebarComponent {

  public blog: Blog;
  public activePage: number = 0;
  public breadcrumb = {
    title: 'Blog Grid Left Sidebar',
    page: 'Home',
    sub_page: 'Blog Grid Left Sidebar'
  }

  constructor(public blogServices: BlogService) {}

  ngOnInit() {
    this.blogServices.getBlog().subscribe(Response => {
      this.blog = Response;
    })
  }
}
