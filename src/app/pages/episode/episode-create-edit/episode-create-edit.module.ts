import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeCreateEditPageRoutingModule } from './episode-create-edit-routing.module';

import { EpisodeCreateEditPage } from './episode-create-edit.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraTextAreaModule} from '../../../components/inputs/amphora-text-area/amphora-text-area.module';
import {AmphoraSeriesTagModule} from '../../../components/common/amphora-series-tag/amphora-series-tag.module';
import {AmphoraUploadImageModule} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.module';
import {AmphoraOptionsSelectModule} from '../../../components/inputs/amphora-options-select/amphora-options-select.module';
import {AmphoraUploadAudioModule} from '../../../components/inputs/amphora-upload-audio/amphora-upload-audio.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EpisodeCreateEditPageRoutingModule,
        AmphoraPageModule,
        AmphoraInputFieldModule,
        AmphoraButtonModule,
        AmphoraTextAreaModule,
        AmphoraSeriesTagModule,
        AmphoraUploadImageModule,
        AmphoraOptionsSelectModule,
        AmphoraUploadAudioModule
    ],
  declarations: [EpisodeCreateEditPage]
})
export class EpisodeCreateEditPageModule {}
