import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Image } from 'ngx-obelisco/core';
import { DefaultImageDirective } from 'ngx-obelisco/shared';

@Component({
  selector: 'o-gallery',
  standalone: true,
  imports: [CommonModule, DefaultImageDirective],
  templateUrl: './o-gallery.component.html',
  styleUrls: ['./o-gallery.component.scss']
})
export class OGalleryComponent {
  @Input() public images: Image[] = [];
  @Input() public isInteractive: boolean = false;
  @Input() public dataTarget!: string;
}
