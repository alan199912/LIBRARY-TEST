import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  public stylesCode = `
    "styles": [
      "src/styles.scss",
      "node_modules/ngx-obelisco/src/lib/scss/obelisco.scss"
    ]
    `;

  public boxIconCode = `
    "styles": [
      "src/styles.scss",
      "node_modules/boxicons/css/boxicons.min.css"
    ]
  `;
}
