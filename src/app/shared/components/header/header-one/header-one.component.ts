import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Logo } from '../../../interface/theme-options';
import { FooterPagesService } from '../../../services/footer-pages.service';
import { CartComponent } from '../widgets/cart/cart.component';
import { LogoSectionComponent } from '../widgets/logo-section/logo-section.component';
import { MenuComponent } from '../widgets/menu/menu.component';
import { MyAccountComponent } from '../widgets/my-account/my-account.component';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-header-one',
  standalone: true,
  imports: [LogoSectionComponent, CartComponent, MyAccountComponent, MenuComponent, CommonModule],
  templateUrl: './header-one.component.html',
  styleUrl: './header-one.component.scss'
})

export class HeaderOneComponent {

  public logo: Logo;
  public isOpen: boolean = false;
  @Input() routePath: string;

  constructor(private footerPagesServices: FooterPagesService,public navService :NavService) {
    this.footerPagesServices.getFooterPages().subscribe(response => {
      this.logo = response.logo;
    })
  }

  isFalse(value: boolean) {
    this.navService.isShow = value;
  }

}
