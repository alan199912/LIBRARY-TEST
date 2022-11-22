import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  OPTION_DATA_SOURCE,
  OPTION_DATA_SOURCE_METHODS,
  OPTION_INTERFACE,
  OPTION_ITEM_INTERFACE
} from 'src/app/constants/option.constants';

@Component({
  selector: 'app-option-api',
  templateUrl: './option-api.component.html',
  styleUrls: ['./option-api.component.scss']
})
export class OptionApiComponent {
  public dataSourceOption = OPTION_DATA_SOURCE;
  public dataSourceMethodsOption = OPTION_DATA_SOURCE_METHODS;
  public columnsOption = COLUMNS;
  public optionInterface = OPTION_INTERFACE;
  public optionInterfaceItem = OPTION_ITEM_INTERFACE;
  public sizes = SIZES;
}
