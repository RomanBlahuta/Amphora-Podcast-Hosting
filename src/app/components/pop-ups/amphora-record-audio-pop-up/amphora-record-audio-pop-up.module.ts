import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {CommonModule} from '@angular/common';
import {AmphoraRecordAudioPopUpComponent} from './amphora-record-audio-pop-up.component';
import {AmphoraCommonPopUpModule} from '../amphora-common-pop-up/amphora-common-pop-up.module';

@NgModule({
    exports: [
        AmphoraRecordAudioPopUpComponent,
    ],
    declarations: [
        AmphoraRecordAudioPopUpComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        AmphoraButtonModule,
        AmphoraCommonPopUpModule,
    ]
})
export class AmphoraRecordAudioPopUpModule {
}
