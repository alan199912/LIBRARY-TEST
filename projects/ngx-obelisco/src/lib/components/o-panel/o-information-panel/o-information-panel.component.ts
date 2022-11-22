import { Component, Input } from '@angular/core';
import { PanelInformation } from '../../../core/models/panel.models';

@Component({
  selector: 'o-information-panel',
  templateUrl: './o-information-panel.component.html',
  styleUrls: ['./o-information-panel.component.scss']
})
export class OInformationPanelComponent {
  @Input() public panelList!: PanelInformation[];
}
