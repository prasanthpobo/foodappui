import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TapToTopComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
