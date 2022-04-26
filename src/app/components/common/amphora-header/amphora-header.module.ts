import {NgModule} from '@angular/core';
import {AmphoraHeaderComponent} from './amphora-header.component';
import {MatIconModule} from '@angular/material/icon';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';
import {AmphoraIconModule} from '../amphora-icon/amphora-icon.module';

@NgModule({
    exports: [
        AmphoraHeaderComponent,
    ],
    declarations: [
        AmphoraHeaderComponent,
    ],
    imports: [
        MatIconModule,
        AmphoraButtonModule,
        AmphoraIconModule
    ]
})
export class AmphoraHeaderModule {
}
