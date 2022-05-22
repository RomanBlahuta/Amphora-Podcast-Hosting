import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';

import { ResetPasswordPage } from './reset-password.page';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraCommonPopUpModule} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraSectionModule} from '../../../components/common/amphora-section/amphora-section.module';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ResetPasswordPageRoutingModule,
        AmphoraButtonModule,
        AmphoraCommonPopUpModule,
        AmphoraInputFieldModule,
        AmphoraSectionModule,
        AmphoraPageModule
    ],
  declarations: [ResetPasswordPage]
})
export class ResetPasswordPageModule {}
