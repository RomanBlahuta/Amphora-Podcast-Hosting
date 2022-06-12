import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SanitizePipe} from './sanitize/sanitize.pipe';

@NgModule({
    exports: [
        SanitizePipe
    ],
    declarations: [
        SanitizePipe,
    ],
    imports: [
        CommonModule,
    ],
})
export class AmphoraPipesModule {
}
