import {NgModule} from '@angular/core';
import {AmphoraSliderComponent} from './amphora-slider.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
    exports: [
        AmphoraSliderComponent,
    ],
    declarations: [
        AmphoraSliderComponent,
    ],
    imports: [
        IonicModule
    ]
})
export class AmphoraSliderModule {
}
