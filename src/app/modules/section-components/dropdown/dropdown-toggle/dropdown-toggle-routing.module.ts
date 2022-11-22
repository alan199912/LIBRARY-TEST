import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownToggleApiComponent } from './pages/dropdown-toggle-api/dropdown-toggle-api.component';
import { DropdownToggleExamplesComponent } from './pages/dropdown-toggle-examples/dropdown-toggle-examples.component';
import { DropdownToggleOverviewComponent } from './pages/dropdown-toggle-overview/dropdown-toggle-overview.component';

const routes: Routes = [
  { path: 'overview', component: DropdownToggleOverviewComponent },
  { path: 'api', component: DropdownToggleApiComponent },
  { path: 'examples', component: DropdownToggleExamplesComponent },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownToggleRoutingModule {}
