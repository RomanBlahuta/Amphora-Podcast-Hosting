import {NgModule} from '@angular/core';
import {AmphoraHeaderComponent} from './amphora-header.component';
import {MatIconModule} from '@angular/material/icon';
import {AmphoraButtonModule} from '../amphora-button/amphora-button.module';
import {AmphoraIconModule} from '../amphora-icon/amphora-icon.module';
import {AmphoraHeaderOrnamentModule} from '../../ornaments/amphora-header-ornament/amphora-header-ornament.module';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

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
        AmphoraIconModule,
        AmphoraHeaderOrnamentModule,
        CommonModule,
        IonicModule,
        RouterModule,
    ]
})
export class AmphoraHeaderModule {
}
