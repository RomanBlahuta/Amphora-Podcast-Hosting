import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {AmphoraPageModule} from '../../components/common/amphora-page/amphora-page.module';
import {AmphoraSectionModule} from '../../components/common/amphora-section/amphora-section.module';
import {AmphoraIconModule} from '../../components/common/amphora-icon/amphora-icon.module';
import {AmphoraButtonModule} from '../../components/common/amphora-button/amphora-button.module';
import {AmphoraSearchFieldModule} from '../../components/inputs/amphora-search-field/amphora-search-field.module';
import {AmphoraPaginationModule} from '../../components/common/amphora-pagination/amphora-pagination.module';
import {AmphoraShowPreviewCardModule} from '../../components/cards/amphora-show-preview-card/amphora-show-preview-card.module';
import {AmphoraLoaderModule} from '../../components/common/amphora-loader/amphora-loader.module';
import {AmphoraNotificationPopUpModule} from '../../components/pop-ups/amphora-notification-pop-up/amphora-notification-pop-up.module';
import {AmphoraCommonPopUpModule} from '../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DashboardPageRoutingModule,
        AmphoraPageModule,
        AmphoraSectionModule,
        AmphoraIconModule,
        AmphoraButtonModule,
        AmphoraSearchFieldModule,
        AmphoraPaginationModule,
        AmphoraShowPreviewCardModule,
        AmphoraLoaderModule,
        AmphoraNotificationPopUpModule,
        AmphoraCommonPopUpModule
    ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
