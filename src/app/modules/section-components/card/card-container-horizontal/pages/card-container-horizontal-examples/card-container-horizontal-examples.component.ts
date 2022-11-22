import { Component } from '@angular/core';
import {
  CARD_CONTAINER_HORIZONTAL_EXAMPLE_BIG,
  CARD_CONTAINER_HORIZONTAL_EXAMPLE_MEDIUM
} from 'src/app/constants/card.constants';

@Component({
  selector: 'app-card-container-horizontal-examples',
  templateUrl: './card-container-horizontal-examples.component.html',
  styleUrls: ['./card-container-horizontal-examples.component.scss']
})
export class CardContainerHorizontalExamplesComponent {
  public cardMedium = CARD_CONTAINER_HORIZONTAL_EXAMPLE_MEDIUM;
  public cardBig = CARD_CONTAINER_HORIZONTAL_EXAMPLE_BIG;
}
