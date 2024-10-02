import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customizer.component.html',
  styleUrl: './customizer.component.scss'
})

export class CustomizerComponent {

  public dark: boolean = false;
  public tabData: string = 'rtl';

  constructor(){
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
  }

  changeMode() {
    this.dark = !this.dark;
    if (this.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  changeLayoutType(direction: string) {
    if (direction == "rtl") {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      this.tabData = 'ltr';
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir','ltr');
      this.tabData = 'rtl';
    }
  }
}
