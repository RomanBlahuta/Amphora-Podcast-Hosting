import {NgModule} from '@angular/core';
import {AmphoraInputFieldComponent} from './amphora-input-field.component';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraInputFieldComponent,
    ],
    declarations: [
        AmphoraInputFieldComponent,
    ],
    imports: [
        CommonModule,
        AmphoraIconModule,
        MatButtonModule,
    ]
})
export class AmphoraInputFieldModule {
}
