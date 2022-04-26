import { Component } from '@angular/core';
import {AppInitService} from './services/app-init.service';

@Component({
  selector: 'amphora-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
      private appInitService: AppInitService,
  ) {}
}
