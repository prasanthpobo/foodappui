import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [BreadcrumbComponent,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})

export class SignUpComponent {

  public breadcrumb = {
    title: 'Create Account',
    page: 'Home',
    sub_page: 'Signup'
  }

  ngOnInit() {
    document.body.classList.add('white-bg')
  }

  ngOnDestroy() {
    document.body.classList.remove('white-bg')
  }

}
