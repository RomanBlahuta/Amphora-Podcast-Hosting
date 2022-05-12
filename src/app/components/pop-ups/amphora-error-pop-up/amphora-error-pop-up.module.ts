import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {AmphoraErrorPopUpComponent} from './amphora-error-pop-up.component';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraErrorPopUpComponent,
    ],
    declarations: [
        AmphoraErrorPopUpComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
        AmphoraButtonModule
    ]
})
export class AmphoraErrorPopUpModule {
}
