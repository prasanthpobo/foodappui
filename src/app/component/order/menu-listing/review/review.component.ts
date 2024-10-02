import { Component } from '@angular/core';
import { ReviewService } from '../../../../shared/services/review.service';
import { reviewData } from '../../../../shared/interface/review';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})

export class ReviewComponent {

  public review: reviewData[];
  constructor(public reviewServices: ReviewService) { }

  ngOnInit() {
    this.reviewServices.getReview().subscribe(response => {
      this.review = response.review;
    })
  }

}
