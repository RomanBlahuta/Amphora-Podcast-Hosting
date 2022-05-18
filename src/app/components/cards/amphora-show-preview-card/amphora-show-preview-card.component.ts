import {Component, Input, OnInit} from '@angular/core';
import {AmphoraShowPreviewCardModel} from './amphora-show-preview-card.model';

@Component({
    selector: 'amphora-show-preview-card',
    templateUrl: './amphora-show-preview-card.component.html',
    styleUrls: ['./amphora-show-preview-card.component.scss'],
})
export class AmphoraShowPreviewCardComponent implements OnInit {

    @Input()
    public model: AmphoraShowPreviewCardModel;

    constructor() { }

    public ngOnInit(): void {}

}
