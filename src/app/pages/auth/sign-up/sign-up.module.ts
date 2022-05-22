import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraSectionModule} from '../../../components/common/amphora-section/amphora-section.module';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';
import {AmphoraCommonPopUpModule} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        SignUpPageRoutingModule,
        AmphoraInputFieldModule,
        AmphoraSectionModule,
        AmphoraPageModule,
        AmphoraButtonModule,
        AmphoraCommonPopUpModule
    ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
