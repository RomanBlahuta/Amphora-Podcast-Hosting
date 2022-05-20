import {NgModule} from '@angular/core';
import {AmphoraShowPreviewCardComponent} from './amphora-show-preview-card.component';
import {AmphoraButtonModule} from '../../common/amphora-button/amphora-button.module';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraShowPreviewCardComponent,
    ],
    declarations: [
        AmphoraShowPreviewCardComponent,
    ],
    imports: [
        CommonModule,
        AmphoraButtonModule,
        AmphoraIconModule
    ]
})
export class AmphoraShowPreviewCardModule {
}
