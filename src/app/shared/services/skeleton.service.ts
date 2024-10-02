import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SkeletonService {

  public isSkeleton: boolean;

  constructor( private router: Router) {
    this.router.events.subscribe(() => {
      this.timeOut();
    });
    this.timeOut();
  }

  timeOut(){
    setTimeout(() => {
      this.isSkeleton = true;
    }, 4000)
    this.isSkeleton = false;
  }
}
