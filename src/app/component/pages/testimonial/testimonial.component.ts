import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { TestimonialService } from '../../../shared/services/testimonial.service';
import { testimonialData } from '../../../shared/interface/testimonial';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [BreadcrumbComponent, CarouselModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})

export class TestimonialComponent {

  public testimonial: testimonialData[];
  public breadcrumb = {
    title: 'Testimonial',
    page: 'Home',
    sub_page: 'Testimonial'
  }

  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    dots : false,
    margin: 32,
    items: 2.5,
    autoplaySpeed: 10000,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 1.2,
      },
      425: {
        items: 1.3,
      },
      576: {
        items: 1.5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2.5,
      }
    },
  }

  public customOptionsRtl: OwlOptions = {
    loop: true,
    autoplay: true,
    rtl: true,
    dots : false,
    autoplayTimeout: 0,
    autoplayHoverPause: true,
    margin: 32,
    items: 2.5,
    autoplaySpeed: 10000,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      375: {
        items: 1.2,
      },
      425: {
        items: 1.3,
      },
      576: {
        items: 1.5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2.5,
      }
    },
  }

  constructor(public testimonialService: TestimonialService) { }

  ngOnInit() {
    this.testimonialService.getTestimonial().subscribe(Response => {
      this.testimonial = Response.testimonial;
    })
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
