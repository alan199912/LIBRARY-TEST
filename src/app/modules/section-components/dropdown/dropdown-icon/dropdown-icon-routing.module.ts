import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownIconOverviewComponent } from './pages/dropdown-icon-overview/dropdown-icon-overview.component';
import { DropdownIconApiComponent } from './pages/dropdown-icon-api/dropdown-icon-api.component';
import { DropdownIconExamplesComponent } from './pages/dropdown-icon-examples/dropdown-icon-examples.component';

const routes: Routes = [
  { path: 'overview', component: DropdownIconOverviewComponent },
  { path: 'api', component: DropdownIconApiComponent },
  { path: 'examples', component: DropdownIconExamplesComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownIconRoutingModule {}
