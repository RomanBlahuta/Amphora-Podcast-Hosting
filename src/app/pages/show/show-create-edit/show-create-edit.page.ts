import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {ShowCreateEditService} from './show-create-edit.service';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraCommonPopUpModel} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';

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
    public uploadImageModel: AmphoraUploadImageModel;
    public addSeriesButtonModel: AmphoraButtonModel;
    public seriesModels: AmphoraSeriesTagModel[] = [];
    public streamingPopUpModel: AmphoraCommonPopUpModel;
    public streamingIconModels: AmphoraIconModel[];

    constructor(private route: ActivatedRoute,
                private showCreateEditService: ShowCreateEditService,
                private popUpService: PopUpService) { }

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
        this.uploadImageModel = this.showCreateEditService.createUploadImage();
        this.streamingOptionsButtonModel = this.showCreateEditService.createStreamingOptionsButton();
        this.streamingIconModels = this.showCreateEditService.createStreamingIcons();
        this.titleInputModel = this.showCreateEditService.createTextInputField(
            null,
            'Show Title',
            (value: string, model: AmphoraInputFieldModel) => console.log(value),
        );
        this.createSeriesInputModel = this.showCreateEditService.createSeriesTagTextInputField(
            null,
            'Add Series',
            (value: string, model: AmphoraInputFieldModel) => console.log(value),
        );
        this.descriptionTextAreaModel = this.showCreateEditService.createTextArea(
            null,
            'Description',
            (value: string, model: AmphoraTextAreaModel) => console.log(value),
        );
        this.streamingPopUpModel = this.popUpService.createStreamingOptionsPopUp({
            applyOnClick: () => {
                console.log('Applied!');
                this.popUpService.hidePopUp();
            },
            cancelOnClick: () => this.popUpService.hidePopUp(),
        });
    }
}
