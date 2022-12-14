import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationEnd, Router, RouterEvent, RouterModule } from '@angular/router';
import { filter, startWith, Subject, takeUntil } from 'rxjs';
import { BreadcrumbService } from 'ngx-obelisco/services';
import { BreadcrumbRoute } from 'ngx-obelisco/core';

@Component({
  selector: 'o-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './o-breadcrumb.component.html',
  styleUrls: ['./o-breadcrumb.component.scss']
})
export class OBreadcrumbComponent implements OnInit, OnDestroy {
  public routes: BreadcrumbRoute[] = [];
  public actualRoute!: BreadcrumbRoute;

  private url!: string;
  private onDestroy$ = new Subject<void>();

  constructor(private readonly router: Router, private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumb$.pipe(takeUntil(this.onDestroy$)).subscribe((breadcrumb) => {
      if (
        Object.entries(breadcrumb).length !== 0 &&
        breadcrumb.routes.length !== 0 &&
        breadcrumb.actualRoute.name !== '' &&
        breadcrumb.url !== ''
      ) {
        this.routes = breadcrumb.routes;
        this.actualRoute = breadcrumb.actualRoute;
        this.url = breadcrumb.url;
        this.getReversedRoutes();
      }
    });
    if (this.routes.length === 0 && !this.actualRoute) {
      this.getPaths();
      return;
    }
  }

  private getPaths(): void {
    this.router.events
      .pipe(
        takeUntil(this.onDestroy$),
        filter((event) => event instanceof NavigationEnd),
        startWith(this.router)
      )
      .subscribe({
        next: (event: any) => {
          event = event as RouterEvent;
          this.routes = [];
          event.url
            .split('/')
            .forEach(
              (item: string, index: number) =>
                (item !== '' || isNaN(+item) || item.length > 2) &&
                this.routes.push({ name: this.formatedName(item), url: this.formatedUrl(item, event.url) })
            );
        }
      });
  }

  private formatedName(path: string): string {
    return (path && path[0].toUpperCase() + path.split('-').join(' ').slice(1)) || '';
  }

  private formatedUrl(url: string, route: string): string {
    return route.split(url)[0] + url;
  }

  private getReversedRoutes(): void {
    if (!this.actualRoute) {
      this.actualRoute = this.routes[this.routes.length - 1];
      this.routes.pop();
    }

    this.routes = [...this.routes].reverse();
    this.routes = [...this.routes, this.actualRoute];
    this.routes = this.routes.map((route) => (!route.url ? { ...route, url: `/${this.url}/${route.id}` } : route));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
