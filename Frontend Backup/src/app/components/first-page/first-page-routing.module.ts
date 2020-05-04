import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPagePage } from './first-page.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPagePageRoutingModule {}
