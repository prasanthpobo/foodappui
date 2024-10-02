import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { Blog, BlogDetailsData } from '../../../shared/interface/blog';
import { BlogService } from '../../../shared/services/blog.service';
import { BlogFilterComponent } from '../widgets/blog-filter/blog-filter.component';

@Component({
  selector: 'app-blog-listing',
  standalone: true,
  imports: [BreadcrumbComponent, BlogFilterComponent, RouterModule, NgbPaginationModule, CommonModule],
  templateUrl: './blog-listing.component.html',
  styleUrl: './blog-listing.component.scss'
})

export class BlogListingComponent {

  public blog: Blog;
  public blogDetails: BlogDetailsData[];
  public pageSize = 6;
  public currentPage = 1;

  public breadcrumb = {
    title: 'Blog List',
    page: 'Home',
    sub_page: 'Blog List'
  }

  constructor(public blogServices: BlogService) { }

  ngOnInit() {
    this.blogServices.getBlog().subscribe(Response => {
      this.blog = Response;
      this.blogDetails = Response.blogDetails;
    })
  }

}
