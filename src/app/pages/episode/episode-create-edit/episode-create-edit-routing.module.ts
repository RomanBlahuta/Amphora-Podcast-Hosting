import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeCreateEditPage } from './episode-create-edit.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodeCreateEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeCreateEditPageRoutingModule {}
