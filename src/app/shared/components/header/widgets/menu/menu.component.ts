import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Menu, NavService } from '../../../../services/nav.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {

  @Input() isShow: boolean;
  @Output() childEvent = new EventEmitter();

  public navItemsList = this.navServices.navItems;

  constructor(public navServices: NavService ) {
    this.navServices.items.subscribe((menuItems) => {
      this.navItemsList = menuItems;
    });
  }

  closeMenu(value: boolean) {
    this.childEvent.emit(value = false);
  }

  toggleMenu(item: Menu) {
    if (!item.active) {
      this.navItemsList.forEach((a: Menu) => {
        if (this.navItemsList.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b: Menu) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  closeToggleMenu(){
     this.navServices.isShow = false
  }
}
