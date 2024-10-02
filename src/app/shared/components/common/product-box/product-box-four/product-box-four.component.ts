import { Component, Input } from '@angular/core';
import { productData } from '../../../../interface/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-box-four',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-box-four.component.html',
  styleUrl: './product-box-four.component.scss'
})

export class ProductBoxFourComponent {

  @Input() data: productData[];
  @Input() class: string;

}
