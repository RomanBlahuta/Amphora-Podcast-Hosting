import {NgModule} from '@angular/core';
import {AmphoraUploadAudioComponent} from './amphora-upload-audio.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {CommonModule} from '@angular/common';
import {AmphoraAudioPlayerModule} from '../../common/amphora-audio-player/amphora-audio-player.module';

@NgModule({
    exports: [
        AmphoraUploadAudioComponent,
    ],
    declarations: [
        AmphoraUploadAudioComponent,
    ],
    imports: [
        CommonModule,
        AmphoraIconModule,
        AmphoraAudioPlayerModule,
    ]
})
export class AmphoraUploadAudioModule {
}
