import {NgModule} from '@angular/core';
import {AmphoraButtonComponent} from './amphora-button.component';
import {MatRippleModule} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {AmphoraIconModule} from '../amphora-icon/amphora-icon.module';

@NgModule({
    exports: [
        AmphoraButtonComponent,
    ],
    declarations: [
        AmphoraButtonComponent,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        AmphoraIconModule
    ]
})
export class AmphoraButtonModule {
}
