import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { OCardContainerHorizontalComponent } from './o-card-container-horizontal/o-card-container-horizontal.component';
import { OCardContainerComponent } from './o-card-container/o-card-container.component';
import { OCardEventSimpleComponent } from './o-card-event-simple/o-card-event-simple.component';
import { OCardEventComponent } from './o-card-event/o-card-event.component';
import { OCardNoticeComponent } from './o-card-notice/o-card-notice.component';
import { OCardSimpleHorizontalComponent } from './o-card-simple-horizontal/o-card-simple-horizontal.component';
import { OCardSimpleComponent } from './o-card-simple/o-card-simple.component';
import { DayMonthFormatPipe, HoursFormatPipe, NumberDayMonthFormatPipe } from 'ngx-obelisco/pipes';
import { DefaultImageDirective } from 'ngx-obelisco/directives';

@NgModule({
  declarations: [
    OCardSimpleHorizontalComponent,
    OCardContainerComponent,
    OCardSimpleComponent,
    OCardContainerHorizontalComponent,
    OCardNoticeComponent,
    OCardEventSimpleComponent,
    OCardEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DefaultImageDirective,
    NumberDayMonthFormatPipe,
    DayMonthFormatPipe,
    HoursFormatPipe
  ],
  exports: [
    OCardSimpleHorizontalComponent,
    OCardContainerComponent,
    OCardSimpleComponent,
    OCardContainerHorizontalComponent,
    OCardNoticeComponent,
    OCardEventSimpleComponent,
    OCardEventComponent
  ]
})
export class OCardModule {}
