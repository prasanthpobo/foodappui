import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogDetailsData } from '../../../../shared/interface/blog';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-blog',
  standalone: true,
  imports: [RouterModule,NgbPaginationModule,CommonModule],
  templateUrl: './details-blog.component.html',
  styleUrl: './details-blog.component.scss'
})

export class DetailsBlogComponent {

  @Input() blog :BlogDetailsData[]
  public pageSize = 6;
  public currentPage = 1;

}
