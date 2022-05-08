import {NgModule} from '@angular/core';
import {AmphoraInputFieldComponent} from './amphora-input-field.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';

@NgModule({
    exports: [
        AmphoraInputFieldComponent,
    ],
    declarations: [
        AmphoraInputFieldComponent,
    ],
    imports: [
        AmphoraIconModule
    ]
})
export class AmphoraInputFieldModule {
}
