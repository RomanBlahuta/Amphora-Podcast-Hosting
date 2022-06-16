import { Component, OnInit } from '@angular/core';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {ActivatedRoute} from '@angular/router';
import {EpisodeCreateEditService} from './episode-create-edit.service';
import {AmphoraUploadAudioModel} from '../../../components/inputs/amphora-upload-audio/amphora-upload-audio.model';
import {AmphoraRecordAudioModel} from '../../../components/inputs/amphora-record-audio/amphora-record-audio.model';
import {ShowCreateEditActions} from '../../../store/show-create-edit/show-create-edit.actions';
import {FormModeEnum} from '../../../shared/enums/forms/form-mode.enum';
import {Store} from '@ngrx/store';
import {PopUpService} from '../../../services/utils/pop-up.service';

@Component({
    selector: 'amphora-episode-create-edit',
    templateUrl: './episode-create-edit.page.html',
    styleUrls: ['./episode-create-edit.page.scss'],
})
export class EpisodeCreateEditPage implements OnInit {
    public pageMode: string;
    public buttonModels: AmphoraButtonModel[];
    public titleInputModel: AmphoraInputFieldModel;
    public descriptionTextAreaModel: AmphoraTextAreaModel;
    public uploadImageModel: AmphoraUploadImageModel;
    public seasonInputFieldModel: AmphoraInputFieldModel;
    public episodeInputFIeldModel: AmphoraInputFieldModel;
    public seriesModels: AmphoraSeriesTagModel[] = [];
    public uploadAudioModel: AmphoraUploadAudioModel;
    public recordAudioModel: AmphoraRecordAudioModel;

    constructor(private route: ActivatedRoute,
                private store$: Store,
                private popUpService: PopUpService,
                private episodeCreateEditService: EpisodeCreateEditService) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.pageMode = params.mode.charAt(0).toUpperCase() + params.mode.slice(1);
            this.store$.dispatch(ShowCreateEditActions.setFormMode({mode: params.mode as FormModeEnum, id: params.id}));
        });

        this.createModels();
    }

    public createModels(): void {
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
