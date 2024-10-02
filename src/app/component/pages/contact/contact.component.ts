import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GoogleMapComponent } from '../../../shared/components/common/google-map/google-map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BreadcrumbComponent, TitleComponent,ContactFormComponent,GoogleMapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  public breadcrumb = {
    title: 'Contact',
    page: 'Home',
    sub_page: 'Contact'
  }

  public topSection = [
    {
      icons: "ri-phone-fill",
      title: "Phone",
      sub_title: "(+91) 96299 12381", 
    },
    {
      icons: "ri-mail-open-fill",
      title: "Email",
      sub_title: "sales@foodpointapp.com",
    },
    // {
    //   icons: "ri-map-pin-fill",
    //   title: "London Office",
    //   sub_title: "Thillai Nagar,Trichy - 620018",
    // },
    {
      icons: "ri-building-fill",
      title: "Bournemouth Office",
      sub_title: "No. 75 K/1, Shifana Complex,Salai Road, Thillai Nagar,Trichy - 620018.",
    },
  ]

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

  ngOnInit() {
    document.body.classList.add('bg-color')
  }

}
