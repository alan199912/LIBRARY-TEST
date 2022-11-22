import { Component } from '@angular/core';
import { DROPDOWN_ICON_NAVIGATION } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-icon',
  templateUrl: './dropdown-icon.component.html',
  styleUrls: ['./dropdown-icon.component.scss']
})
export class DropdownIconComponent {
  public navigation = DROPDOWN_ICON_NAVIGATION;
}
