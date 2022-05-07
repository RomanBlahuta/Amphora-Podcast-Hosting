import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import {AmphoraPageModule} from '../../components/common/amphora-page/amphora-page.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignInPageRoutingModule,
        AmphoraPageModule
    ],
  declarations: [SignInPage]
})
export class SignInPageModule {}
