import {NgModule} from '@angular/core';
import {AmphoraRecordAudioComponent} from './amphora-record-audio.component';
import {CommonModule} from '@angular/common';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';

@NgModule({
    exports: [
        AmphoraRecordAudioComponent,
    ],
    declarations: [
        AmphoraRecordAudioComponent,
    ],
    imports: [
        CommonModule,
        AmphoraIconModule,
    ],
})
export class AmphoraRecordAudioModule {
}
