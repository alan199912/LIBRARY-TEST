import { Component, Input } from '@angular/core';
import { CollapseInfo } from '../../core/models/collapse.models';

@Component({
  selector: 'o-collapse-info',
  templateUrl: './o-collapse-info.component.html',
  styleUrls: ['./o-collapse-info.component.scss']
})
export class OCollapseInfoComponent {
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public identifier!: string;
  @Input() public collapseInfoArr: CollapseInfo[] = [];

  get getLastCollapseInfoArr(): number {
    return this.collapseInfoArr.indexOf(this.collapseInfoArr[this.collapseInfoArr.length - 1]);
  }
}
