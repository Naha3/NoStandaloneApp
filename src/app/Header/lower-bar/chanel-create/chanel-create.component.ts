import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chanel-create',
  templateUrl: './chanel-create.component.html',
  styleUrls: ['./chanel-create.component.scss']
})
export class ChanelCreateComponent {
  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}