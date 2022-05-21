import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPageRoutingModule } from './show-routing.module';

import { ShowPage } from './show.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraSearchFieldModule} from '../../../components/inputs/amphora-search-field/amphora-search-field.module';
import {AmphoraEpisodeCardModule} from '../../../components/cards/amphora-episode-card/amphora-episode-card.module';
import {AmphoraPaginationModule} from '../../../components/common/amphora-pagination/amphora-pagination.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraIconModule} from '../../../components/common/amphora-icon/amphora-icon.module';
import {AmphoraSeriesTagModule} from '../../../components/common/amphora-series-tag/amphora-series-tag.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowPageRoutingModule,
        AmphoraPageModule,
        AmphoraSearchFieldModule,
        AmphoraEpisodeCardModule,
        AmphoraPaginationModule,
        AmphoraButtonModule,
        AmphoraIconModule,
        AmphoraSeriesTagModule
    ],
  declarations: [ShowPage]
})
export class ShowPageModule {}
