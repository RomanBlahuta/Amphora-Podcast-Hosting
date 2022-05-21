import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCreateEditPageRoutingModule } from './show-create-edit-routing.module';

import { ShowCreateEditPage } from './show-create-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCreateEditPageRoutingModule
  ],
  declarations: [ShowCreateEditPage]
})
export class ShowCreateEditPageModule {}
