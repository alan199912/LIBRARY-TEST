import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { ONavModule } from 'projects/ngx-obelisco/src/public-api';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule, ONavModule]
})
export class CardModule {}
