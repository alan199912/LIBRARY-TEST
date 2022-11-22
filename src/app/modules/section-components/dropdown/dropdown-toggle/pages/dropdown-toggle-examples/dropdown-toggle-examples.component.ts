import { Component } from '@angular/core';
import {
  DROPDOWN_TOGGLE_EXAMPLE,
  DROPDOWN_TOGGLE_BORDER_EXAMPLE,
  DROPDOWN_TOGGLE_SIZE_LG_EXAMPLE,
  DROPDOWN_TOGGLE_SIZE_MD_EXAMPLE,
  DROPDOWN_TOGGLE_SIZE_SM_EXAMPLE,
  DROPDOWN_TOGGLE_EXAMPLE_TS
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-toggle-examples',
  templateUrl: './dropdown-toggle-examples.component.html',
  styleUrls: ['./dropdown-toggle-examples.component.scss']
})
export class DropdownToggleExamplesComponent {
  public exampleDropdownToggle = DROPDOWN_TOGGLE_EXAMPLE;
  public exampleDropdownToggleBorder = DROPDOWN_TOGGLE_BORDER_EXAMPLE;
  public exampleDropdownSizes = [
    DROPDOWN_TOGGLE_SIZE_LG_EXAMPLE,
    DROPDOWN_TOGGLE_SIZE_MD_EXAMPLE,
    DROPDOWN_TOGGLE_SIZE_SM_EXAMPLE
  ];
  public exampeDropdownToggleTs = DROPDOWN_TOGGLE_EXAMPLE_TS;
  public options = ['Opción 1', 'Opción 2', 'Opción 3'];

  public getData(event: string[]): void {
    console.log(event);
  }
}
