import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productData } from '../../../../interface/product';

@Component({
  selector: 'app-product-box-five',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-box-five.component.html',
  styleUrl: './product-box-five.component.scss'
})

export class ProductBoxFiveComponent {

  @Input() data: productData[];
  @Input() class: string;



}
