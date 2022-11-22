import { Component } from '@angular/core';
import { COLUMNS, SIZES } from 'src/app/constants/components.constants';
import {
  NAVIGATION_HORIZONTAL_DATA_SOURCE_METHODS,
  NAVIGATION_HORIZONTAL_INTERFACE
} from 'src/app/constants/navigation.constants';

@Component({
  selector: 'app-navigation-horizontal-api',
  templateUrl: './navigation-horizontal-api.component.html',
  styleUrls: ['./navigation-horizontal-api.component.scss']
})
export class NavigationHorizontalApiComponent {
  public columns = COLUMNS;
  public dataSourceNavigationHorizontal = NAVIGATION_HORIZONTAL_DATA_SOURCE_METHODS;
  public exampleIterface = NAVIGATION_HORIZONTAL_INTERFACE;
  public sizes = SIZES;
}
