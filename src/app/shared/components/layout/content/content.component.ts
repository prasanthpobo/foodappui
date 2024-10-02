import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CustomizerComponent } from '../../customizer/customizer.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from '../../header/widgets/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, MobileMenuComponent, CustomizerComponent,RouterModule,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})

export class ContentComponent {

  public routePath: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routePath = event.url;
      }
    });
  }

  ngOnDestroy(){
     this.routePath = '';
  }

}
