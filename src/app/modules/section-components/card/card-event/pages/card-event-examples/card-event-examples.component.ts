import { Component } from '@angular/core';
import { CARD_EVENT_EXAMPLE } from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-event-examples',
  templateUrl: './card-event-examples.component.html',
  styleUrls: ['./card-event-examples.component.scss']
})
export class CardEventExamplesComponent {
  public cardExample = CARD_EVENT_EXAMPLE;
}
