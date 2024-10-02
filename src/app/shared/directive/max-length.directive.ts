import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})

export class MaxLengthDirective {
  @Input() maxLength: number = 6;

  constructor() { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    if (value.length > this.maxLength) {
      if(event){
        event.preventDefault();
        event.stopPropagation();
      }
      const truncatedValue = value.substring(0, this.maxLength);
      this.writeValue(truncatedValue);
    }
  }

  writeValue(value: any) {
    if (event) {
      (event.target as HTMLInputElement).value = value;
  }
  
  }
}
