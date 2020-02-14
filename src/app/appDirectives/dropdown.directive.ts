import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.active') className;
  @HostListener('click') myClick(){
    this.className = !this.className;
  }

}
