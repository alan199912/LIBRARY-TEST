import { Component } from '@angular/core';
import {
  COLLAPSE_SIMPLE_HTML,
  COLLAPSE_SIMPLE_HTML_MULTIPLE,
  COLLAPSE_SIMPLE_HTML_ICON,
  COLLAPSE_SIMPLE_TS
} from 'src/app/constants/collapse.constants';

@Component({
  selector: 'app-collapse-simple-examples',
  templateUrl: './collapse-simple-examples.component.html',
  styleUrls: ['./collapse-simple-examples.component.scss']
})
export class CollapseSimpleExamplesComponent {
  public array = [
    {
      title: 'Colapsable',
      description: 'Descripcion de ejemplo'
    },
    {
      title: 'Colapsable',
      description: 'Descripcion de ejemplo'
    },
    {
      title: 'Colapsable',
      description: 'Descripcion de ejemplo'
    }
  ];

  public exampleHTML = COLLAPSE_SIMPLE_HTML;
  public exampleHTMLMultiple = COLLAPSE_SIMPLE_HTML_MULTIPLE;
  public exampleHTMLIcon = COLLAPSE_SIMPLE_HTML_ICON;
  public exampleTs = COLLAPSE_SIMPLE_TS;
}
