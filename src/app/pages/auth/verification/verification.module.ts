import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraSectionModule} from '../../../components/common/amphora-section/amphora-section.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraCommonPopUpModule} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        VerificationPageRoutingModule,
        AmphoraPageModule,
        AmphoraSectionModule,
        AmphoraButtonModule,
        AmphoraInputFieldModule,
        AmphoraCommonPopUpModule
    ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}
