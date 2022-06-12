import {NgModule} from '@angular/core';
import {AmphoraUploadImageComponent} from './amphora-upload-image.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {CommonModule} from '@angular/common';
import {AmphoraPipesModule} from '../../../shared/pipes/amphora-pipes.module';

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
        AmphoraPipesModule,
    ]
})
export class AmphoraUploadImageModule {
}
