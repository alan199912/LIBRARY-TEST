import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ODropdownIconComponent } from './o-dropdown-icon/o-dropdown-icon.component';
import { ODropdownToggleComponent } from './o-dropdown-toggle/o-dropdown-toggle.component';

@NgModule({
  declarations: [ODropdownIconComponent, ODropdownToggleComponent],
  imports: [CommonModule],
  exports: [ODropdownIconComponent, ODropdownToggleComponent]
})
export class ODropdownModule {}
