import {Component, OnInit} from '@angular/core';
import {AppInitService} from './services/app-init.service';

@Component({
    selector: 'amphora-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
    constructor(private appInitService: AppInitService) {}

    public ngOnInit(): void {
        this.appInitService.initApp();
    }
}
