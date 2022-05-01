import {NgModule} from '@angular/core';
import {AmphoraSectionComponent} from './amphora-section.component';
import {AmphoraSectionOrnamentModule} from '../../ornaments/amphora-section-ornament/amphora-section-ornament.module';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [
        AmphoraSectionComponent,
    ],
    declarations: [
        AmphoraSectionComponent,
    ],
    imports: [
        AmphoraSectionOrnamentModule,
        CommonModule,
    ]
})
export class AmphoraSectionModule {
}
