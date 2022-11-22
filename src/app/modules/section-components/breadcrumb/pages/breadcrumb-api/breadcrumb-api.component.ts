import { Component } from '@angular/core';
import { BREADCRUMB_INTERFACE1, BREADCRUMB_INTERFACE2 } from 'src/app/constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb-api',
  templateUrl: './breadcrumb-api.component.html',
  styleUrls: ['./breadcrumb-api.component.scss']
})
export class BreadcrumbApiComponent {
  public exampleInterface1 = BREADCRUMB_INTERFACE1;
  public exampleInterface2 = BREADCRUMB_INTERFACE2;
}
