import {NgModule} from '@angular/core';
import {AmphoraSliderComponent} from './amphora-slider.component';
import {IonicModule} from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    exports: [
        AmphoraSliderComponent,
    ],
    declarations: [
        AmphoraSliderComponent,
    ],
    imports: [
        IonicModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AmphoraSliderModule {
}
