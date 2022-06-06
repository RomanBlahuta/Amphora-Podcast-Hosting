import { Component, OnInit } from '@angular/core';
import {NotFoundService} from './not-found.service';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';

@Component({
    selector: 'amphora-not-found',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
    public goBackButtonModel: AmphoraButtonModel;
    public minotaurMazeIconModel: AmphoraIconModel;

    constructor(private notFoundService: NotFoundService) { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.minotaurMazeIconModel = this.notFoundService.createMinotaurMazeIcon();
        this.goBackButtonModel = this.notFoundService.createBackButton();
    }
}
