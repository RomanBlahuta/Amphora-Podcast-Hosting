import {NgModule} from '@angular/core';
import {AmphoraHeaderComponent} from './amphora-header.component';
import {MatIconModule} from '@angular/material/icon';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';

@NgModule({
    exports: [
        AmphoraHeaderComponent,
    ],
    declarations: [
        AmphoraHeaderComponent,
    ],
    imports: [
        MatIconModule,
        AmphoraButtonModule
    ]
})
export class AmphoraHeaderModule {
}
