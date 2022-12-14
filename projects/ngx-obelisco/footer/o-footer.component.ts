import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Link, Network, Phone } from 'ngx-obelisco/core/models';
import { DefaultImageDirective } from 'ngx-obelisco/directives';

@Component({
  selector: 'o-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, DefaultImageDirective],
  templateUrl: './o-footer.component.html',
  styleUrls: ['./o-footer.component.scss']
})
export class OFooterComponent {
  @Input() public phonesList: Phone[] = [];
  @Input() public networksList: Network[] = [];
  @Input() public linksList: Link[] = [];

  get getIsPhones(): boolean {
    return this.phonesList.length > 0;
  }

  get getIsNetworks(): boolean {
    return this.networksList.length > 0;
  }

  get getIsLinks(): boolean {
    return this.linksList.length > 0;
  }
}
