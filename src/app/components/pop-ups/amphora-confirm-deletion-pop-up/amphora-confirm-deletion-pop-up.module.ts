import {NgModule} from '@angular/core';
import {AmphoraConfirmDeletionPopUpComponent} from './amphora-confirm-deletion-pop-up.component';
import {AmphoraCommonPopUpModule} from '../amphora-common-pop-up/amphora-common-pop-up.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraConfirmDeletionPopUpComponent,
    ],
    declarations: [
        AmphoraConfirmDeletionPopUpComponent,
    ],
    imports: [
        CommonModule,
        AmphoraCommonPopUpModule
    ]
})
export class AmphoraConfirmDeletionPopUpModule {
}
