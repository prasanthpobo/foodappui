import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqService } from '../../../shared/services/faq.service';
import { faq, faqData } from '../../../shared/interface/faq';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [BreadcrumbComponent, NgbAccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})

export class FaqComponent {

  public faq :faqData[]
  public breadcrumb = {
    title: 'FAQ',
    page: 'Home',
    sub_page: 'FAQ'
  }

  constructor(public faqServices: FaqService) {}

  ngOnInit() {
    this.faqServices.getFaq().subscribe(Response => {
      this.faq = Response.faq;
    })
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
