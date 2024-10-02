import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productData } from '../../../../interface/product';

@Component({
  selector: 'app-product-box-one',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-box-one.component.html',
  styleUrl: './product-box-one.component.scss'
})

export class ProductBoxOneComponent {

  @Input() data: productData[];
  @Input() class: string;

}
