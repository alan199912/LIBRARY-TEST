import { AfterViewInit, Component, ElementRef, Input, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { Access } from 'ngx-obelisco/core/models';

@Component({
  selector: 'o-access',
  templateUrl: './o-access.component.html',
  styleUrls: ['./o-access.component.scss']
})
export class OAccessComponent implements AfterViewInit {
  @Input() public accessList!: Access[];
  @Input() public isLogOut: boolean = false;
  @Input() public isBig: boolean = false;
  @Input() public isCard: boolean = false;
  @Input() public isDescriptive?: boolean = false;
  @Input() public isHorizontal?: boolean = false;

  @ViewChildren('access') public access!: QueryList<ElementRef>;

  constructor(private readonly renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    const indexArr = this.accessList?.map((_, i) => i);

    this.access.forEach((e, index) => {
      if ((e.nativeElement.href === '' || !e.nativeElement.href) && indexArr.includes(index)) {
        this.renderer.setAttribute(e.nativeElement, 'href', this.accessList[index].link!);
      }
    });
  }
}
