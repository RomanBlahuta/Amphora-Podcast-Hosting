import {NgModule} from '@angular/core';
import {AmphoraUploadImageComponent} from './amphora-upload-image.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraUploadImageComponent,
    ],
    declarations: [
        AmphoraUploadImageComponent,
    ],
    imports: [
        CommonModule,
        AmphoraIconModule,
    ]
})
export class AmphoraUploadImageModule {
}
