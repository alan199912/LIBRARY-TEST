import { Component, Inject, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ngx-obelisco/core/services';
import { BREADCRUMB_EXAMPLE_TS } from 'src/app/constants/breadcrumb.constants';

@Component({
  selector: 'app-breadcrumb-examples',
  templateUrl: './breadcrumb-examples.component.html',
  styleUrls: ['./breadcrumb-examples.component.scss']
})
export class BreadcrumbExamplesComponent implements OnInit {
  public exampleTS = BREADCRUMB_EXAMPLE_TS;
  constructor(@Inject(BreadcrumbService) private readonly breadcrumb: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumb.breadcrumb$.next({
      actualRoute: { name: 'ruta actual' },
      routes: [
        { name: 'ruta 1', id: '1' },
        { name: 'ruta 2', id: '5', url: '/routes-2/5' }
      ],
      url: 'url-ruta'
    });
  }
}
