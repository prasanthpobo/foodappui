import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { overView, productData } from '../../../../shared/interface/product';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})

export class OverviewComponent {

  @Input() overView: productData[];

  public overViewData?: overView[];
  ngOnInit() {
    this.overView.forEach(ele => {
      this.overViewData = ele.overView;
    })
  }

}
