import { Component } from '@angular/core';

@Component({
  selector: 'app-manu-icon',
  templateUrl: './manu-icon.component.html',
  styleUrl: './manu-icon.component.scss'
})
export class ManuIconComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }


}