import { Component, Input } from '@angular/core';
import { Data } from '../../../interface/home';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})

export class TitleComponent {

  @Input() data: Data;
  @Input() class: string;
  @Input() animation: boolean;
  @Input() type : string;
  @Input() title : string;
  @Input() subTitle : string;
  @Input() textClass : string;
  @Input() dropdown : boolean
  public isOpen : boolean = false;
}
