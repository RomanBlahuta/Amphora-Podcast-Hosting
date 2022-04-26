import {NgModule} from '@angular/core';
import {AmphoraIconComponent} from './amphora-icon.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        AmphoraIconComponent,
    ],
    declarations: [
        AmphoraIconComponent,
    ],
    imports: [
        MatIconModule,
        CommonModule,
    ]
})
export class AmphoraIconModule {
}
