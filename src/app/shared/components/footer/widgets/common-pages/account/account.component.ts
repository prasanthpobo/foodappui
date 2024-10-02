import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../../../../interface/theme-options';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})

export class AccountComponent {

  @Input() footer: Footer;


}
