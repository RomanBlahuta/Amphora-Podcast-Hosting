import {NgModule} from '@angular/core';
import {AmphoraCommonPopUpComponent} from './amphora-common-pop-up.component';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraCommonPopUpComponent,
    ],
    declarations: [
        AmphoraCommonPopUpComponent,
    ],
    imports: [
        CommonModule,
        AmphoraButtonModule
    ],
})
export class AmphoraCommonPopUpModule {
}
