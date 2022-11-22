import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ONavModule,
  OProgressBarComponent,
  OStatusBarComponent,
  OTableComponent,
  StepNextDirective,
  StepPreviousDirective
} from 'projects/ngx-obelisco/src/public-api';

import { StatusBarRoutingModule } from './status-bar-routing.module';
import { StatusBarComponent } from './status-bar.component';
import { StatusBarApiComponent } from './pages/status-bar-api/status-bar-api.component';
import { StatusBarExampleComponent } from './pages/status-bar-example/status-bar-example.component';
import { BestPracticesComponent } from 'src/app/components/best-practices/best-practices.component';
import { BadPracticesComponent } from 'src/app/components/bad-practices/bad-practices.component';
import { ViewerComponent } from 'src/app/components/viewer/viewer.component';
import { ClipboardDirective } from 'src/app/shared/directives/copy/clipboard.directive';
import { PrismDirective } from 'src/app/shared/directives/prism/prism.directive';
import { StatusBarDemoComponent } from './pages/status-bar-example/status-bar-demo/status-bar-demo.component';

@NgModule({
  declarations: [StatusBarComponent, StatusBarApiComponent, StatusBarExampleComponent, StatusBarDemoComponent],
  imports: [
    CommonModule,
    StatusBarRoutingModule,
    ONavModule,
    OStatusBarComponent,
    OTableComponent,
    BestPracticesComponent,
    BadPracticesComponent,
    ViewerComponent,
    ClipboardDirective,
    PrismDirective,
    StepNextDirective,
    StepPreviousDirective
  ]
})
export class StatusBarModule {}
