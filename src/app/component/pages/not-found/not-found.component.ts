import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [BreadcrumbComponent,RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})

export class NotFoundComponent {

  public breadcrumb = {
    title: '404 Not Found',
    page: 'Home',
    sub_page: '404'
  }

  ngOnInit() {
    document.body.classList.add('white-bg')
  }

  ngOnDestroy() {
    document.body.classList.remove('white-bg')
  }

}
