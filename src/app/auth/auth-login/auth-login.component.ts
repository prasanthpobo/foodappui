import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/components/common/breadcrumb/breadcrumb.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [RouterModule,BreadcrumbComponent,ReactiveFormsModule],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})

export class AuthLoginComponent {

  public breadcrumb = {
    title: 'Login',
    page: 'Home',
    sub_page: 'Login'
  }

  public loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, public router: Router) {
    const userData = localStorage.getItem('user');
      if(userData?.length != null){
        router.navigate(['/home/classic'])
      }
    this.loginForm = this.fb.group({
      number: ["123456789", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });

  }

  login() {
    if (this.loginForm.value["number"] == "123456789" && this.loginForm.value["password"] == "test123") {
      let user = {
        number: "123456789",
        password: "test123",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/home/classic"]);
    }
  }


}
