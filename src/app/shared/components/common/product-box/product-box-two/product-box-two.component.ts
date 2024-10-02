import { Component, Input } from '@angular/core';
import { productData } from '../../../../interface/product';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-box-two',
  standalone: true,
  imports: [CommonModule,RouterModule,CarouselModule],
  templateUrl: './product-box-two.component.html',
  styleUrl: './product-box-two.component.scss'
})

export class ProductBoxTwoComponent {

  @Input() data: productData[];
  

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
    responsive: {
      0: {
        items: 1.2,
      },
      375: {
        items: 1.5,
      },
      470: {
        items: 2,
      },
      715: {
        items: 3,
      },
      1315: {
        items: 4,
      },
      1612: {
        items: 5,
      }
    },
    nav: false
  }

}
