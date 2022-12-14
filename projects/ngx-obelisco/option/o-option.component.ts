import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option, OptionItem } from 'ngx-obelisco/core';
import { Sizes } from 'ngx-obelisco/core';

@Component({
  selector: 'o-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-option.component.html',
  styleUrls: ['./o-option.component.scss']
})
export class OOptionComponent implements OnInit {
  @Input() public option!: Option;
  @Input() public size: Sizes = 'md';

  @Output() optionSelected = new EventEmitter<string>();

  private firstActive!: OptionItem;

  public ngOnInit(): void {
    this.firstActive = this.option.items.find((e) => e.active === true)!;
    this.option.items.map((e) => e !== this.firstActive && (e.active = false));
  }

  public selectedOption(item: OptionItem): void {
    if (item !== this.firstActive) {
      this.firstActive = item;
      this.optionSelected.emit(item.text);
    }

    this.option.items.map((e) => e !== item && (e.active = false));
    item.active = !item.active;
  }
}
