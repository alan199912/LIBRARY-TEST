import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownIconRoutingModule } from './dropdown-icon-routing.module';
import { ONavModule, OTableComponent, ODropdownModule } from 'projects/ngx-obelisco/src/public-api';

import { DropdownIconComponent } from './dropdown-icon.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { DropdownIconApiComponent } from './pages/dropdown-icon-api/dropdown-icon-api.component';
import { DropdownIconExamplesComponent } from './pages/dropdown-icon-examples/dropdown-icon-examples.component';
import { DropdownIconOverviewComponent } from './pages/dropdown-icon-overview/dropdown-icon-overview.component';

@NgModule({
  declarations: [
    DropdownIconComponent,
    DropdownIconApiComponent,
    DropdownIconExamplesComponent,
    DropdownIconOverviewComponent
  ],
  imports: [
    CommonModule,
    DropdownIconRoutingModule,
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
export class DropdownIconModule {}
