import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import { DROPDOWN_TOGGLE_DATA_SOURCE, DROPDOWN_DATA_SOURCE_METHODS } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-toggle-api',
  templateUrl: './dropdown-toggle-api.component.html',
  styleUrls: ['./dropdown-toggle-api.component.scss']
})
export class DropdownToggleApiComponent {
  public columnsDropdown = COLUMNS;
  public dataSourceDropdown = DROPDOWN_TOGGLE_DATA_SOURCE;
  public dataSourceMethodsDropdown = DROPDOWN_DATA_SOURCE_METHODS;
  public sizes = SIZES;
}
