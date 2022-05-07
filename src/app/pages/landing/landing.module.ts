import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LandingPage } from './landing.page';

import { LandingPageRoutingModule } from './landing-routing.module';
import {AmphoraHeaderModule} from '../../components/common/amphora-header/amphora-header.module';
import {AmphoraFooterModule} from '../../components/common/amphora-footer/amphora-footer.module';
import {AmphoraSectionModule} from '../../components/common/amphora-section/amphora-section.module';
import {AmphoraIconModule} from '../../components/common/amphora-icon/amphora-icon.module';
import {AmphoraSliderModule} from '../../components/common/amphora-slider/amphora-slider.module';
import {AmphoraPageModule} from '../../components/common/amphora-page/amphora-page.module';
import {AmphoraShowCardModule} from '../../components/cards/amphora-show-card/amphora-show-card.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LandingPageRoutingModule,
        AmphoraHeaderModule,
        AmphoraFooterModule,
        AmphoraSectionModule,
        AmphoraIconModule,
        AmphoraSliderModule,
        AmphoraPageModule,
        AmphoraShowCardModule
    ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
