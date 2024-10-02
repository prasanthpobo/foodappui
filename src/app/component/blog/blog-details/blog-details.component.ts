import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { Blog, BlogDetailsData } from '../../../shared/interface/blog';
import { BlogService } from '../../../shared/services/blog.service';
import { BlogFilterComponent } from '../widgets/blog-filter/blog-filter.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { BlogBoxComponent } from './blog-box/blog-box.component';
import { LeaveCommentComponent } from './leave-comment/leave-comment.component';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [BreadcrumbComponent, BlogFilterComponent, 
    LeaveCommentComponent,CommentsSectionComponent, BlogBoxComponent,CommonModule],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})

export class BlogDetailsComponent {

  public slugUrl: string;
  public blogData: BlogDetailsData[];
  public blog: Blog;
  public breadcrumb = {
    title: 'Blog Details',
    page: 'Home',
    sub_page: 'Blog Details'
  }

  constructor(private route: ActivatedRoute, public blogServices: BlogService) {
    this.route.params.subscribe(res => {
      if (res) {
        this.slugUrl = res['slug'];
      }
    })
  }

  ngOnInit() {
    this.blogServices.getBlog().subscribe(response => {
      this.blogData = response.blogDetails;
      this.blog = response;
      if (this.blogData) {
        this.blogData = this.blogData.filter(ele => ele.slug_url === this.slugUrl);
      }
    });
  }

}
