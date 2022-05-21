import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCreateEditPage } from './show-create-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCreateEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCreateEditPageRoutingModule {}
