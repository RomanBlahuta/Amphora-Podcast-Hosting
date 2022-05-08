import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import {AmphoraPageModule} from '../../../components/common/amphora-page/amphora-page.module';
import {AmphoraSectionModule} from '../../../components/common/amphora-section/amphora-section.module';
import {AmphoraInputFieldModule} from '../../../components/inputs/amphora-input-field/amphora-input-field.module';
import {AmphoraButtonModule} from '../../../components/common/amphora-button/amphora-button.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignInPageRoutingModule,
        AmphoraPageModule,
        AmphoraSectionModule,
        AmphoraInputFieldModule,
        AmphoraButtonModule
    ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
