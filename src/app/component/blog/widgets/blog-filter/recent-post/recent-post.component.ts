import { Component, Input } from '@angular/core';
import { RecentPostData } from '../../../../../shared/interface/blog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recent-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.scss'
})

export class RecentPostComponent {

  @Input() data :RecentPostData[]

}
