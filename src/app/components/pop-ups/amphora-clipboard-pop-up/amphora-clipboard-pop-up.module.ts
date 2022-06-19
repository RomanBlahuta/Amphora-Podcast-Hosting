import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {CommonModule} from '@angular/common';
import {AmphoraClipboardPopUpComponent} from './amphora-clipboard-pop-up.component';

@NgModule({
    exports: [
        AmphoraClipboardPopUpComponent,
    ],
    declarations: [
        AmphoraClipboardPopUpComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        AmphoraButtonModule,
    ]
})
export class AmphoraClipboardPopUpModule {
}
