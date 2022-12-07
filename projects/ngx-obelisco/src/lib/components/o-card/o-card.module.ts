import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { DefaultImageDirective } from '../../shared/directives/img-broken/img-broken.directive';

import { OCardContainerHorizontalComponent } from './o-card-container-horizontal/o-card-container-horizontal.component';
import { OCardContainerComponent } from './o-card-container/o-card-container.component';
import { OCardEventSimpleComponent } from './o-card-event-simple/o-card-event-simple.component';
import { OCardEventComponent } from './o-card-event/o-card-event.component';
import { OCardNoticeComponent } from './o-card-notice/o-card-notice.component';
import { OCardSimpleHorizontalComponent } from './o-card-simple-horizontal/o-card-simple-horizontal.component';
import { OCardSimpleComponent } from './o-card-simple/o-card-simple.component';
import { DayMonthFormatPipe } from '../../shared/pipes/day-month-format/day-month-format.pipe';
import { HoursFormatPipe } from '../../shared/pipes/hours-format/hours-format.pipe';
import { NumberDayMonthFormatPipe } from '../../shared/pipes/number-day-month-format/number-day-month-format.pipe';

@NgModule({
  declarations: [
    OCardSimpleHorizontalComponent,
    OCardContainerComponent,
    OCardSimpleComponent,
    OCardContainerHorizontalComponent,
    OCardNoticeComponent,
    OCardEventSimpleComponent,
    OCardEventComponent,
    DayMonthFormatPipe,
    HoursFormatPipe
  ],
  imports: [CommonModule, RouterModule, DefaultImageDirective, NumberDayMonthFormatPipe],
  exports: [
    OCardSimpleHorizontalComponent,
    OCardContainerComponent,
    OCardSimpleComponent,
    OCardContainerHorizontalComponent,
    OCardNoticeComponent,
    OCardEventSimpleComponent,
    OCardEventComponent,
    DayMonthFormatPipe,
    HoursFormatPipe
  ]
})
export class OCardModule {}
