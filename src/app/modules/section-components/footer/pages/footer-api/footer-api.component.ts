import { Component } from '@angular/core';
import {
  FOOTER_DATA_SOURCE,
  FOOTER_INTERFACE_LINK,
  FOOTER_INTERFACE_NETWORK,
  FOOTER_INTERFACE_PHONE
} from 'src/app/constants/footer.constants';
import { COLUMNS } from 'src/app/constants/components.constants';

@Component({
  selector: 'app-footer-api',
  templateUrl: './footer-api.component.html',
  styleUrls: ['./footer-api.component.scss']
})
export class FooterApiComponent {
  public dataSource = FOOTER_DATA_SOURCE;
  public columns = COLUMNS;
  public exampleIterfacePhone = FOOTER_INTERFACE_PHONE;
  public exampleIterfaceNetwork = FOOTER_INTERFACE_NETWORK;
  public exampleIterfaceLink = FOOTER_INTERFACE_LINK;
}
