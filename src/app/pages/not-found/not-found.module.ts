import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotFoundPageRoutingModule } from './not-found-routing.module';

import { NotFoundPage } from './not-found.page';
import {AmphoraPageModule} from '../../components/common/amphora-page/amphora-page.module';
import {AmphoraIconModule} from '../../components/common/amphora-icon/amphora-icon.module';
import {AmphoraButtonModule} from '../../components/common/amphora-button/amphora-button.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NotFoundPageRoutingModule,
        AmphoraPageModule,
        AmphoraIconModule,
        AmphoraButtonModule
    ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}
