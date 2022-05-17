import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AmphoraPaginationComponent} from './amphora-pagination.component';

@NgModule({
    exports: [
        AmphoraPaginationComponent,
    ],
    declarations: [
        AmphoraPaginationComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
    ]
})
export class AmphoraPaginationModule {
}
