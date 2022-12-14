import { Component, Input } from '@angular/core';
import { Collapse } from 'ngx-obelisco/core';

@Component({
  selector: 'o-collapse',
  templateUrl: './o-collapse.component.html',
  styleUrls: ['./o-collapse.component.scss']
})
export class OCollapseComponent {
  @Input() public arrCollapse: Collapse[] = [];
  @Input() public isMultipleSelection: boolean = false;
  @Input() public identifier: string = '';
  @Input() public isIcon: boolean = false;
}
