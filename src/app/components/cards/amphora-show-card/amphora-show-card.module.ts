import {NgModule} from '@angular/core';
import {AmphoraShowCardComponent} from './amphora-show-card.component';
import {RouterModule} from '@angular/router';

@NgModule({
    exports: [
        AmphoraShowCardComponent,
    ],
    declarations: [
        AmphoraShowCardComponent,
    ],
    imports: [
        RouterModule,
    ]
})
export class AmphoraShowCardModule {
}
