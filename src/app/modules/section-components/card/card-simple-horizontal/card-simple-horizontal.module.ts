import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardSimpleHorizontalRoutingModule } from './card-simple-horizontal-routing.module';
import { CardSimpleHorizontalComponent } from './card-simple-horizontal.component';
import { CardSimpleHorizontalOverviewComponent } from './pages/card-simple-horizontal-overview/card-simple-horizontal-overview.component';
import { CardSimpleHorizontalApiComponent } from './pages/card-simple-horizontal-api/card-simple-horizontal-api.component';
import { CardSimpleHorizontalExamplesComponent } from './pages/card-simple-horizontal-examples/card-simple-horizontal-examples.component';
import { OCardModule } from 'projects/ngx-obelisco/card';
import { ONavModule } from 'projects/ngx-obelisco/nav';
import { OTableComponent } from 'projects/ngx-obelisco/table';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';

@NgModule({
  declarations: [
    CardSimpleHorizontalComponent,
    CardSimpleHorizontalOverviewComponent,
    CardSimpleHorizontalApiComponent,
    CardSimpleHorizontalExamplesComponent
  ],
  imports: [
    CommonModule,
    CardSimpleHorizontalRoutingModule,
    ONavModule,
    BestPracticesComponent,
    BadPracticesComponent,
    OTableComponent,
    ViewerComponent,
    ClipboardDirective,
    OCardModule,
    PrismDirective
  ]
})
export class CardSimpleHorizontalModule {}
