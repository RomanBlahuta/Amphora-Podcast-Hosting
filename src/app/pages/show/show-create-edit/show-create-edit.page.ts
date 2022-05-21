import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {ShowCreateEditService} from './show-create-edit.service';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';

@Component({
    selector: 'amphora-show-create-edit',
    templateUrl: './show-create-edit.page.html',
    styleUrls: ['./show-create-edit.page.scss'],
})
export class ShowCreateEditPage implements OnInit {
    public headerModel: AmphoraHeaderModel;
    public buttonModels: AmphoraButtonModel[];
    public titleInputModel: AmphoraInputFieldModel;
    public descriptionTextAreaModel: AmphoraTextAreaModel;
    public createSeriesInputModel: AmphoraInputFieldModel;
    public streamingOptionsButtonModel: AmphoraButtonModel;
    public addSeriesButtonModel: AmphoraButtonModel;
    public seriesModels: AmphoraSeriesTagModel[] = [];

    constructor(private route: ActivatedRoute,
                private showCreateEditService: ShowCreateEditService) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log('mode: ', params.mode);
            console.log('id: ', params.id);
        });

        this.createModels();
    }

    public createModels(): void {
        this.headerModel = this.showCreateEditService.createHeader();
        this.buttonModels = this.showCreateEditService.createButtons();
        this.seriesModels = this.showCreateEditService.createSeriesTags();
        this.addSeriesButtonModel = this.showCreateEditService.createAddSeriesButton();
        this.titleInputModel = this.showCreateEditService.createTextInputField(
            null,
            'Show Title',
            (value: string, model: AmphoraInputFieldModel) => console.log(value),
        );
        this.createSeriesInputModel = this.showCreateEditService.createTextInputField(
            null,
            'Add Series',
            (value: string, model: AmphoraInputFieldModel) => console.log(value),
        );
        this.descriptionTextAreaModel = this.showCreateEditService.createTextArea(
            null,
            'Description',
            (value: string, model: AmphoraTextAreaModel) => console.log(value),
        );
    }
}
