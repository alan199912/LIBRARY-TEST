import { Component } from '@angular/core';
import { DROPDOWN_TOGGLE_NAVIGATION } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-toggle',
  templateUrl: './dropdown-toggle.component.html',
  styleUrls: ['./dropdown-toggle.component.scss']
})
export class DropdownToggleComponent {
  public navigation = DROPDOWN_TOGGLE_NAVIGATION;
}
