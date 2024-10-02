import { Injectable } from '@angular/core';
import { productData } from '../interface/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantSearchService {

  public search_text: string = "";
  public product: productData[];
  public searchData: productData[];
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;

  constructor(private productService: ProductService) { 
    this.productService.getProduct().subscribe(response => {
      if (response.product) {
        this.product = response.product;
      }
    })
  }

  searchKey(data: string) {
    data ? this.addFix() : this.removeFix();
    this.search_text = data;
    this.searchData = this.search_text === "" ? this.product : this.product?.filter((element) => {
      return element.name.toLowerCase().includes(this.search_text);
    });
    this.checkSearchResultEmpty(this.searchData);
  }

  checkSearchResultEmpty(items: productData[]) {
    if (!items?.length) {
      this.searchResultEmpty = true;
    } else {
      this.searchResultEmpty = false;
    }
  }

  addFix() {
    this.searchResult = true;
  }

  removeFix() {
    this.search_text = "";
    this.searchResult = false;
  }

  clickOutside() {
    this.search_text = "";
    this.searchResult = false;
    this.searchResultEmpty = false;
  }
}
