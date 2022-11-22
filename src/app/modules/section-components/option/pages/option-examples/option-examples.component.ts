import { Component } from '@angular/core';
import {
  OPTION_EXAMPLE_HTML,
  OPTION_EXAMPLE_MULTIPLE_HTML,
  OPTION_EXAMPLE_MULTIPLE_TS,
  OPTION_EXAMPLE_SIZES_HTML,
  OPTION_EXAMPLE_SIZES_TS,
  OPTION_EXAMPLE_TS
} from 'src/app/constants/option.constants';

@Component({
  selector: 'app-option-examples',
  templateUrl: './option-examples.component.html',
  styleUrls: ['./option-examples.component.scss']
})
export class OptionExamplesComponent {
  public option = {
    title: 'Desplegable',
    items: [{ text: 'Item 1' }, { text: 'Item 2', active: true }, { text: 'Item 3' }]
  };

  public optionList = [
    {
      title: 'Desplegable 1',
      items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }, { text: 'Item 4' }]
    },
    {
      title: 'Desplegable 2',
      items: [{ text: 'Item 1' }, { text: 'Item 2' }]
    },
    {
      title: 'Desplegable 3',
      items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
    }
  ];

  public optionSm = {
    title: 'Desplegable',
    items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
  };

  public optionLg = {
    title: 'Desplegable',
    items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
  };

  public selectedItem(event: string): void {
    console.log(event);
  }

  public optionExampleHTML = OPTION_EXAMPLE_HTML;
  public optionExampleTS = OPTION_EXAMPLE_TS;
  public optionMultipleHTML = OPTION_EXAMPLE_MULTIPLE_HTML;
  public optionMultipleTS = OPTION_EXAMPLE_MULTIPLE_TS;
  public optionSizesHTML = OPTION_EXAMPLE_SIZES_HTML;
  public optionSizesTS = OPTION_EXAMPLE_SIZES_TS;
}
