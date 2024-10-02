import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-food',
  standalone: true,
  imports: [],
  templateUrl: './custom-food.component.html',
  styleUrl: './custom-food.component.scss'
})

export class CustomFoodComponent {

  constructor(public modalServices: NgbModal) {}


}
