import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraSectionModule} from '../../../components/common/amphora-section/amphora-section.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraCommonPopUpModule} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.module';
import {AmphoraLoaderModule} from '../../../components/common/amphora-loader/amphora-loader.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ResetPasswordPageRoutingModule,
        AmphoraPageModule,
        AmphoraSectionModule,
        AmphoraInputFieldModule,
        AmphoraButtonModule,
        AmphoraCommonPopUpModule,
        AmphoraLoaderModule
    ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
