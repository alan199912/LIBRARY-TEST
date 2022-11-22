import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownIconComponent } from './dropdown-icon/dropdown-icon.component';
import { DropdownToggleComponent } from './dropdown-toggle/dropdown-toggle.component';

const routes: Routes = [
  {
    path: 'dropdown-toggle',
    component: DropdownToggleComponent,
    loadChildren: () => import('./dropdown-toggle/dropdown-toggle.module').then((m) => m.DropdownToggleModule)
  },
  {
    path: 'dropdown-icon',
    component: DropdownIconComponent,
    loadChildren: () => import('./dropdown-icon/dropdown-icon.module').then((m) => m.DropdownIconModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dropdown-toggle' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule {}
