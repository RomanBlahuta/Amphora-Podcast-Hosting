import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCreateEditPageRoutingModule } from './show-create-edit-routing.module';

import { ShowCreateEditPage } from './show-create-edit.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraSeriesTagModule} from '../../../components/common/amphora-series-tag/amphora-series-tag.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraTextAreaModule} from '../../../components/inputs/amphora-text-area/amphora-text-area.module';
import {AmphoraUploadImageModule} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowCreateEditPageRoutingModule,
        AmphoraPageModule,
        AmphoraSeriesTagModule,
        AmphoraButtonModule,
        AmphoraInputFieldModule,
        AmphoraTextAreaModule,
        AmphoraUploadImageModule
    ],
  declarations: [ShowCreateEditPage]
})
export class ShowCreateEditPageModule {}
