import { Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})

export class ComingSoonComponent {

  ngOnInit() {
    document.body.classList.add('white-bg')
  }

  ngOnDestroy() {
    document.body.classList.remove('white-bg')
  }


}
