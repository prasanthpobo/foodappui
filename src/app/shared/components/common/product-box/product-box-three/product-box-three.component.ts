import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productData } from '../../../../interface/product';

@Component({
  selector: 'app-product-box-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-box-three.component.html',
  styleUrl: './product-box-three.component.scss'
})

export class ProductBoxThreeComponent {

  @Input() data: productData[];
  @Input() class: string;

  increaseDecrease(i: number,qty:number) {
    this.data.forEach((item) => {
      if (item.id == i) {
        if (qty == -1 && item.value > 1) {
          item.value -= 1;
        } else if (qty == 1) {
          item.value += 1;
        }
      }
    })
  }
}
