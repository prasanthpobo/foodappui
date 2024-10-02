import { Component, Input } from '@angular/core';
import { Footer } from '../../../../interface/theme-options';
import { AccountComponent } from './account/account.component';
import { CompanyComponent } from './company/company.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

@Component({
  selector: 'app-common-pages',
  standalone: true,
  imports: [CompanyComponent,AccountComponent,UsefulLinksComponent,TopBrandsComponent,],
  templateUrl: './common-pages.component.html',
  styleUrl: './common-pages.component.scss'
})

export class CommonPagesComponent {

  @Input() footer: Footer;
  public isCompany : boolean = false;
  public isAccount : boolean = false;
  public isLink : boolean = false;
  public isBrand : boolean = false;

}
