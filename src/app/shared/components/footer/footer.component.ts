import { Component, Input } from '@angular/core';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { Footer, Logo } from '../../interface/theme-options';
import { FooterPagesService } from '../../services/footer-pages.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterOneComponent,FooterTwoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {

  @Input() type: string;
  @Input() routePath : string;
  public footer: Footer ;
  public logo:  Logo;

  constructor(private footerPagesServices: FooterPagesService) {
    this.footerPagesServices.getFooterPages().subscribe(response => {
      if(response){
        this.footer = response.footer;
        this.logo = response.logo;
      }
    })
  }

}
