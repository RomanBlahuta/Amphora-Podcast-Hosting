import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmphoraAudioPlayerComponent} from './amphora-audio-player.component';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';

@NgModule({
    exports: [
        AmphoraAudioPlayerComponent,
    ],
    declarations: [
        AmphoraAudioPlayerComponent,
    ],
    imports: [
        CommonModule,
        AmphoraButtonModule,
    ]
})
export class AmphoraAudioPlayerModule {
}
