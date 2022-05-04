import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmphoraHeaderModule} from '../amphora-header/amphora-header.module';
import {AmphoraPageComponent} from './amphora-page.component';
import {AmphoraFooterModule} from '../amphora-footer/amphora-footer.module';
import {IonicModule} from '@ionic/angular';

@NgModule({
    exports: [
        AmphoraPageComponent,
    ],
    declarations: [
        AmphoraPageComponent,
    ],
    imports: [
        AmphoraHeaderModule,
        CommonModule,
        AmphoraFooterModule,
        IonicModule,
    ]
})
export class AmphoraPageModule {
}
