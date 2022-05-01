import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LandingPage } from './landing.page';

import { LandingPageRoutingModule } from './landing-routing.module';
import {AmphoraHeaderModule} from '../../components/common/amphora-header/amphora-header.module';
import {AmphoraFooterModule} from '../../components/common/amphora-footer/amphora-footer.module';
import {AmphoraSectionModule} from '../../components/common/amphora-section/amphora-section.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LandingPageRoutingModule,
        AmphoraHeaderModule,
        AmphoraFooterModule,
        AmphoraSectionModule
    ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
