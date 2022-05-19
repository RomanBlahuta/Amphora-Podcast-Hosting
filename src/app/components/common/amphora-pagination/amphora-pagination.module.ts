import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AmphoraPaginationComponent} from './amphora-pagination.component';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';

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
        AmphoraButtonModule,
    ]
})
export class AmphoraPaginationModule {
}
