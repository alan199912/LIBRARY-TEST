import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sizes } from '../../../core/models/sizes.models';

@Component({
  selector: 'o-dropdown-icon',
  templateUrl: './o-dropdown-icon.component.html',
  styleUrls: ['./o-dropdown-icon.component.scss']
})
export class ODropdownIconComponent {
  public selectedOptionsArr: string[] = [];

  @Input() public filterName!: string;
  @Input() public options: string[] = [];
  @Input() public size: Sizes = 'md';
  @Input() public isBordered: boolean = false;
  @Input() public isMultipleSelection: boolean = false;

  get getIsSelectedOption(): boolean {
    return this.selectedOptionsArr.length > 0;
  }

  @Output() public dataSelected = new EventEmitter<string | string[]>();

  public selectedOption(option: string): void {
    if (this.isMultipleSelection) {
      if (this.selectedOptionsArr.includes(option)) {
        this.selectedOptionsArr.splice(this.selectedOptionsArr.indexOf(option), 1);
        this.dataSelected.emit(this.selectedOptionsArr);
        return;
      }

      this.selectedOptionsArr.push(option);
      this.dataSelected.emit(this.selectedOptionsArr);
      return;
    }

    this.selectedOptionsArr = [];

    this.selectedOptionsArr.push(option);
    this.dataSelected.emit(option);
  }
}
