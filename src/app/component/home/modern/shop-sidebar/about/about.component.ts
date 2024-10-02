import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../../shared/components/common/breadcrumb/breadcrumb.component';
import { AboutUsData, OurTeam, Services } from '../../../../../shared/interface/about-us';
import { AboutUsService } from '../../../../../shared/services/about-us.service';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent,ServiceSectionComponent,TeamSectionComponent,AboutSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent {

  public aboutData : AboutUsData;
  public services: Services[];
  public ourTeam : OurTeam[]
  public breadcrumb = {
    title: 'About us',
    page: 'Home',
    sub_page: 'About us'
  }

  constructor(public aboutServices: AboutUsService) { }

  ngOnInit() {
    this.aboutServices.getAboutUs().subscribe(res => {
      this.aboutData = res.data;
      this.services = res.services;
      this.ourTeam = res.our_team;
    })
  }
}
