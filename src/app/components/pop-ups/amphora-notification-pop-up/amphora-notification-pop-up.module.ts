import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {AmphoraNotificationPopUpComponent} from './amphora-notification-pop-up.component';

@NgModule({
    exports: [
        AmphoraNotificationPopUpComponent,
    ],
    declarations: [
        AmphoraNotificationPopUpComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        AmphoraButtonModule
    ]
})
export class AmphoraNotificationPopUpModule {
}
