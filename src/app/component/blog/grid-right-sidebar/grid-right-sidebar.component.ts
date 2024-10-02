import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { Blog } from '../../../shared/interface/blog';
import { BlogService } from '../../../shared/services/blog.service';
import { BlogFilterComponent } from '../widgets/blog-filter/blog-filter.component';
import { DetailsBlogComponent } from '../widgets/details-blog/details-blog.component';

@Component({
  selector: 'app-grid-right-sidebar',
  standalone: true,
  imports: [BreadcrumbComponent,BlogFilterComponent,DetailsBlogComponent],
  templateUrl: './grid-right-sidebar.component.html',
  styleUrl: './grid-right-sidebar.component.scss'
})

export class GridRightSidebarComponent {

  public blog: Blog;
  
  public breadcrumb = {
    title: 'Blog Grid Right Sidebar',
    page: 'Home',
    sub_page: 'Blog Grid Right Sidebar'
  }

  constructor(public blogServices: BlogService) { }

  ngOnInit() {
    this.blogServices.getBlog().subscribe(Response => {
      this.blog = Response;
    })
  }

}
