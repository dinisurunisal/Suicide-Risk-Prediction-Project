import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultHomePage } from './result-home.page';

const routes: Routes = [
  {
    path: '',
    component: ResultHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultHomePageRoutingModule {}
