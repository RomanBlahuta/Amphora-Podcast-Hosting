import { Component, OnInit } from '@angular/core';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {ActivatedRoute} from '@angular/router';
import {EpisodeCreateEditService} from './episode-create-edit.service';

@Component({
  selector: 'amphora-episode-create-edit',
  templateUrl: './episode-create-edit.page.html',
  styleUrls: ['./episode-create-edit.page.scss'],
})
export class EpisodeCreateEditPage implements OnInit {

    public headerModel: AmphoraHeaderModel;
    public buttonModels: AmphoraButtonModel[];
    public titleInputModel: AmphoraInputFieldModel;
    public descriptionTextAreaModel: AmphoraTextAreaModel;
    public uploadImageModel: AmphoraUploadImageModel;
    public seasonInputFieldModel: AmphoraInputFieldModel;
    public episodeInputFIeldModel: AmphoraInputFieldModel;
    public seriesModels: AmphoraSeriesTagModel[] = [];

    constructor(private route: ActivatedRoute,
                private episodeCreateEditService: EpisodeCreateEditService) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log('mode: ', params.mode);
            console.log('id: ', params.id);
        });

        this.createModels();
    }

    public createModels(): void {
        this.headerModel = this.episodeCreateEditService.createHeader();
        this.buttonModels = this.episodeCreateEditService.createButtons();
        this.seriesModels = this.episodeCreateEditService.createSeriesTags();
        this.uploadImageModel = this.episodeCreateEditService.createUploadImage();
        this.titleInputModel = this.episodeCreateEditService.createTextInputField(
            null,
            'Show Title',
            (value: string, model: AmphoraInputFieldModel) => console.log(value),
        );
        this.seasonInputFieldModel = this.episodeCreateEditService.createNumberInputField(
            null,
            'Season',
            (value: string, model: AmphoraInputFieldModel) => console.log(value)
        );
        this.episodeInputFIeldModel = this.episodeCreateEditService.createNumberInputField(
            null,
            'Episode',
            (value: string, model: AmphoraInputFieldModel) => console.log(value)
        );
        this.descriptionTextAreaModel = this.episodeCreateEditService.createTextArea(
            null,
            'Description',
            (value: string, model: AmphoraTextAreaModel) => console.log(value),
        );
    }

}
