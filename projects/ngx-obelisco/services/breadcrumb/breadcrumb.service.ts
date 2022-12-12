import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from '../../models/breadcrumb.models';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumb$ = new BehaviorSubject<Breadcrumb>({
    actualRoute: { name: '' },
    routes: [],
    url: ''
  });
}
