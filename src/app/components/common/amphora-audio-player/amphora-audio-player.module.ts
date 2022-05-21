import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmphoraAudioPlayerComponent} from './amphora-audio-player.component';

@NgModule({
    exports: [
        AmphoraAudioPlayerComponent,
    ],
    declarations: [
        AmphoraAudioPlayerComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class AmphoraAudioPlayerModule {
}
