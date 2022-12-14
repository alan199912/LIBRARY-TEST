import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sizes } from 'ngx-obelisco/core';
@Component({
  selector: 'o-dropdown-toggle',
  templateUrl: './o-dropdown-toggle.component.html',
  styleUrls: ['./o-dropdown-toggle.component.scss']
})
export class ODropdownToggleComponent {
  public selectedOptionsArr: string[] = [];

  @Input() public filterName!: string;
  @Input() public options: string[] = [];
  @Input() public size: Sizes = 'md';
  @Input() public isBordered: boolean = false;

  @Output() public dataSelected = new EventEmitter<string[]>();

  get getIsSelectedOption(): boolean {
    return this.selectedOptionsArr.length > 0;
  }

  get getNumberSelectedOptions(): string {
    return this.selectedOptionsArr.length !== 0 ? `(${this.selectedOptionsArr.length})` : '';
  }

  public selectedOption(option: string): void {
    if (this.selectedOptionsArr.includes(option)) {
      this.selectedOptionsArr.splice(this.selectedOptionsArr.indexOf(option), 1);
      this.dataSelected.emit(this.selectedOptionsArr);
      return;
    }

    this.selectedOptionsArr.push(option);
    this.dataSelected.emit(this.selectedOptionsArr);
  }
}
