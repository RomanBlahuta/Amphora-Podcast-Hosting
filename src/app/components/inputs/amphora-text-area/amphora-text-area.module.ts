import {NgModule} from '@angular/core';
import {AmphoraTextAreaComponent} from './amphora-text-area.component';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraTextAreaComponent,
    ],
    declarations: [
        AmphoraTextAreaComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class AmphoraTextAreaModule {
}
