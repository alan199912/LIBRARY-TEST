import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ONavModule } from 'projects/ngx-obelisco/src/public-api';

import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';

@NgModule({
  declarations: [AccessComponent],
  imports: [CommonModule, AccessRoutingModule, ONavModule]
})
export class AccessModule {}
