import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [BreadcrumbComponent,RouterModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})

export class OtpComponent {

  public breadcrumb = {
    title: 'One Time Password',
    page: 'Home',
    sub_page: 'OTP'
  }

  ngOnInit() {
    document.body.classList.add('white-bg')
  }

  ngOnDestroy() {
    document.body.classList.remove('white-bg')
  }
  
}


