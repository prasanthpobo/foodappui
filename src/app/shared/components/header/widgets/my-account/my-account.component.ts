import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})

export class MyAccountComponent {

  constructor(public router: Router) {}

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/auth/login");
  }

}
