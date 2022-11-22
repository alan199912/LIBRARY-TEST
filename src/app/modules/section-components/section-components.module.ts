import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponentsRoutingModule } from './section-components-routing.module';
import { OCardModule, ONavModule } from 'projects/ngx-obelisco/src/public-api';

import { SectionComponentsComponent } from './section-components.component';

@NgModule({
  declarations: [SectionComponentsComponent],
  imports: [CommonModule, SectionComponentsRoutingModule, ONavModule, OCardModule]
})
export class SectionComponentsModule {}
