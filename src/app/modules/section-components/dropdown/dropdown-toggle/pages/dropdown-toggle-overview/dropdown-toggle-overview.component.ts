import { Component } from '@angular/core';
import { DROPDOWN_BEST_PRACTICES, DROPDOWN_BAD_PRACTICES } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-toggle-overview',
  templateUrl: './dropdown-toggle-overview.component.html',
  styleUrls: ['./dropdown-toggle-overview.component.scss']
})
export class DropdownToggleOverviewComponent {
  public bestPractices = DROPDOWN_BEST_PRACTICES;
  public badPractices = DROPDOWN_BAD_PRACTICES;
}
