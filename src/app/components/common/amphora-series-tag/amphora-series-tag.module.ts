import {NgModule} from '@angular/core';
import {AmphoraSeriesTagComponent} from './amphora-series-tag.component';
import {CommonModule} from '@angular/common';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';

@NgModule({
    exports: [
        AmphoraSeriesTagComponent,
    ],
    declarations: [
        AmphoraSeriesTagComponent,
    ],
    imports: [
        CommonModule,
        AmphoraButtonModule,
    ],
})
export class AmphoraSeriesTagModule {
}
