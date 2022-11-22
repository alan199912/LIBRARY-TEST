import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownToggleRoutingModule } from './dropdown-toggle-routing.module';
import { ONavModule, OTableComponent, ODropdownModule } from 'projects/ngx-obelisco/src/public-api';

import { DropdownToggleComponent } from './dropdown-toggle.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { DropdownToggleApiComponent } from './pages/dropdown-toggle-api/dropdown-toggle-api.component';
import { DropdownToggleOverviewComponent } from './pages/dropdown-toggle-overview/dropdown-toggle-overview.component';
import { DropdownToggleExamplesComponent } from './pages/dropdown-toggle-examples/dropdown-toggle-examples.component';

@NgModule({
  declarations: [
    DropdownToggleComponent,
    DropdownToggleApiComponent,
    DropdownToggleOverviewComponent,
    DropdownToggleExamplesComponent
  ],
  imports: [
    CommonModule,
    DropdownToggleRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ODropdownModule,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective
  ]
})
export class DropdownToggleModule {}
