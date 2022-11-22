import { Component, Input } from '@angular/core';
import { AccessGroup } from '../../../core/models/access.models';

@Component({
  selector: 'o-access-group',
  templateUrl: './o-access-group.component.html',
  styleUrls: ['./o-access-group.component.scss']
})
export class OAccessGroupComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public access!: AccessGroup;
  @Input() public isReverse: boolean = false;
}
