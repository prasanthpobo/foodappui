import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [BreadcrumbComponent,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})

export class SignInComponent {

  public breadcrumb = {
    title: 'Login',
    page: 'Home',
    sub_page: 'Login'
  }

  ngOnInit() {
    document.body.classList.add('white-bg')
  }

  ngOnDestroy() {
    document.body.classList.remove('white-bg')
  }

}
