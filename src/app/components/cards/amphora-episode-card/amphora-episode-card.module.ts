import {NgModule} from '@angular/core';
import {AmphoraEpisodeCardComponent} from './amphora-episode-card.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {AmphoraSeriesTagModule} from '../../common/amphora-series-tag/amphora-series-tag.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraEpisodeCardComponent,
    ],
    declarations: [
        AmphoraEpisodeCardComponent,
    ],
    imports: [
        CommonModule,
        AmphoraIconModule,
        AmphoraButtonModule,
        AmphoraSeriesTagModule
    ]
})
export class AmphoraEpisodeCardModule {
}
