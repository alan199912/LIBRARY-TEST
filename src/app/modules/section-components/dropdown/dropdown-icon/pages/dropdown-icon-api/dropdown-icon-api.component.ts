import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import { DROPDOWN_ICON_DATA_SOURCE, DROPDOWN_DATA_SOURCE_METHODS } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-icon-api',
  templateUrl: './dropdown-icon-api.component.html',
  styleUrls: ['./dropdown-icon-api.component.scss']
})
export class DropdownIconApiComponent {
  public columnsDropdown = COLUMNS;
  public dataSourceDropdown = DROPDOWN_ICON_DATA_SOURCE;
  public dataSourceMethodsDropdown = DROPDOWN_DATA_SOURCE_METHODS;
  public sizes = SIZES;
}
