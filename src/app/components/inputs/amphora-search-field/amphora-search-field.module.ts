import {NgModule} from '@angular/core';
import {AmphoraIconModule} from '../../common/amphora-icon/amphora-icon.module';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {AmphoraSearchFieldComponent} from './amphora-search-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    exports: [
        AmphoraSearchFieldComponent,
    ],
    declarations: [
        AmphoraSearchFieldComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AmphoraIconModule,
        MatButtonModule,
    ]
})
export class AmphoraSearchFieldModule {
}
