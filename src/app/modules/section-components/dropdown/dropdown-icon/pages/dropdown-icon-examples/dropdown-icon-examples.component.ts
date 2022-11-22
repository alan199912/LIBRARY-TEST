import { Component } from '@angular/core';
import {
  DROPDOWN_ICON_ONLY_EXAMPLE,
  DROPDOWN_ICON_EXAMPLE,
  DROPDOWN_ICON_BORDER_EXAMPLE,
  DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE,
  DROPDOWN_ICON_EXAMPLE_TS
} from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-icon-examples',
  templateUrl: './dropdown-icon-examples.component.html',
  styleUrls: ['./dropdown-icon-examples.component.scss']
})
export class DropdownIconExamplesComponent {
  public exampleDropdownIcon = DROPDOWN_ICON_EXAMPLE;
  public exampleDropdownIconBorder = DROPDOWN_ICON_BORDER_EXAMPLE;
  public exampleDropdownIconOnly = DROPDOWN_ICON_ONLY_EXAMPLE;
  public exampleDropdownIconMultipleSelection = DROPDOWN_ICON_MULTIPLE_SELECTION_EXAMPLE;
  public options = ['Opción 1', 'Opción 2', 'Opción 3'];
  public exampeDropdownIconTs = DROPDOWN_ICON_EXAMPLE_TS;

  public getData(event: string | string[]): void {
    console.log(event);
  }
}
