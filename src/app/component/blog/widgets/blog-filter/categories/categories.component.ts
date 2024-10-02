import { Component, Input } from '@angular/core';
import { CategoriesData } from '../../../../../shared/interface/blog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent {

  @Input() data :CategoriesData[]
}
