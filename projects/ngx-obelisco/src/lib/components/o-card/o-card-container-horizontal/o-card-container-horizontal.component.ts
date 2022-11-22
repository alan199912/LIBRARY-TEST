import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'o-card-container-horizontal',
  templateUrl: './o-card-container-horizontal.component.html',
  styleUrls: ['./o-card-container-horizontal.component.scss']
})
export class OCardContainerHorizontalComponent implements AfterViewInit {
  @Input() public title!: string;
  @Input() public text!: string;
  @Input() public img!: string;
  @Input() public link!: string;
  @Input() public route!: string;
  @Input() public isBig: boolean = false;

  @ViewChild('card') public card!: ElementRef;

  constructor(private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    if (this.link) {
      this.renderer.setAttribute(this.card.nativeElement, 'href', this.link);
    }
  }
}
