import { Component } from '@angular/core';
import { DROPDOWN_BEST_PRACTICES, DROPDOWN_BAD_PRACTICES } from 'src/app/constants/dropdown.constants';

@Component({
  selector: 'app-dropdown-icon-overview',
  templateUrl: './dropdown-icon-overview.component.html',
  styleUrls: ['./dropdown-icon-overview.component.scss']
})
export class DropdownIconOverviewComponent {
  public bestPractices = DROPDOWN_BEST_PRACTICES;
  public badPractices = DROPDOWN_BAD_PRACTICES;
}
