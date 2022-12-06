import { Component } from '@angular/core';
import {
  BREADCRUMB_INTERFACE1,
  BREADCRUMB_INTERFACE2,
  DATA_SOURCE_BREADCRUMB
} from 'src/app/constants/breadcrumb.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-breadcrumb-api',
  templateUrl: './breadcrumb-api.component.html',
  styleUrls: ['./breadcrumb-api.component.scss']
})
export class BreadcrumbApiComponent {
  public exampleInterface1 = BREADCRUMB_INTERFACE1;
  public exampleInterface2 = BREADCRUMB_INTERFACE2;
  public dataSource = DATA_SOURCE_BREADCRUMB;
  public columns = COLUMNS;
}
