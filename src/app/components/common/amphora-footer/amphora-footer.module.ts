import {NgModule} from '@angular/core';
import {AmphoraFooterComponent} from './amphora-footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  exports: [
      AmphoraFooterComponent,
  ],
  declarations: [
      AmphoraFooterComponent,
  ],
  imports: [
      CommonModule,
      RouterModule,
  ],
})
export class AmphoraFooterModule {
}
