import { Component, Input } from '@angular/core';
import { Access, AccessCategory, AccessList } from '../../core/models/access.models';

@Component({
  selector: 'o-access-list',
  templateUrl: './o-access-list.component.html',
  styleUrls: ['./o-access-list.component.scss']
})
export class OAccessListComponent {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public access!: Access;
  @Input() public accessElements: AccessList[] = [];
  @Input() public accessCategoryElements: AccessCategory[] = [];

  get getIsAccessElements(): boolean {
    return this.accessElements.length > 0;
  }
}
