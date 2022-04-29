import {NgModule} from '@angular/core';
import {AmphoraButtonComponent} from './amphora-button.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    exports: [
        AmphoraButtonComponent,
    ],
    declarations: [
        AmphoraButtonComponent,
    ],
    imports: [
        MatRippleModule
    ]
})
export class AmphoraButtonModule {
}
