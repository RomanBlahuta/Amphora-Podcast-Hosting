import {NgModule} from '@angular/core';
import {AmphoraLoaderComponent} from './amphora-loader.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    exports: [
        AmphoraLoaderComponent,
    ],
    declarations: [
        AmphoraLoaderComponent,
    ],
    imports: [
        MatIconModule
    ]
})
export class AmphoraLoaderModule {
}
