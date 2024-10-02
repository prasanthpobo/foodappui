import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { categoriesData } from '../../../../shared/interface/categories';
import { CategoriesService } from '../../../../shared/services/categories.service';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})

export class CategoriesSectionComponent {

  @Input() id: number[];
  @Input() type : string;
  
  public categories: categoriesData[];
  
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    items: 8,
    dots: false,
    navSpeed: 700,
    navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
    responsive: {
      0: {
        items: 2,
      },
      502: {
        items: 3,
      },
      690: {
        items: 4,
      },
      1185: {
        items: 5,
      },
      1393: {
        items: 8,
      }
    },
    nav: false
  }

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    // this.categoriesService.getCategories().subscribe(response => {
    //   this.categories = response.categories;
    //   if (Array.isArray(this.id)) {
    //     this.categories = this.categories.filter((ele => {
    //       return this.id.includes(ele.id)
    //     }))
    //   }
    // })
    this.getCategoriesAPI();
  }
  getCategoriesAPI(){
    this.categoriesService.getCategoriesAPI().subscribe(response => {      
      this.categories = response.category;
      if (Array.isArray(this.id)) {
        this.categories = this.categories.filter((ele => {
          return this.id.includes(ele.id)
        }))
      }
    })
  }
  
}
