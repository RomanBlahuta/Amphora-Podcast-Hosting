import {Component, OnInit} from '@angular/core';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {ActivatedRoute} from '@angular/router';
import {EpisodeCreateEditService} from './episode-create-edit.service';
import {AmphoraUploadAudioModel} from '../../../components/inputs/amphora-upload-audio/amphora-upload-audio.model';
import {AmphoraRecordAudioModel} from '../../../components/inputs/amphora-record-audio/amphora-record-audio.model';
import {FormModeEnum} from '../../../shared/enums/forms/form-mode.enum';
import {Store} from '@ngrx/store';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {AmphoraOptionsSelectModel} from '../../../components/inputs/amphora-options-select/amphora-options-select.model';
import {EpisodeCreateEditActions} from '../../../store/episode-create-edit/episode-create-edit.actions';
import {EpisodeCreateEditSelectors} from '../../../store/episode-create-edit/episode-create-edit.selectors';
import {EpisodeCreateFormEnum} from '../../../shared/enums/forms/episode-create-form.enum';

import {AmphoraRecordAudioPopUpModel} from '../../../components/pop-ups/amphora-record-audio-pop-up/amphora-record-audio-pop-up.model';
import {Observable} from 'rxjs';

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
    public seriesModels: Observable<AmphoraSeriesTagModel[]>;
    public optionSelectModel: AmphoraOptionsSelectModel;
    public uploadAudioModel: AmphoraUploadAudioModel;
    public recordAudioModel: AmphoraRecordAudioModel;
    public recordAudioPopUpModel: AmphoraRecordAudioPopUpModel;

    constructor(private route: ActivatedRoute,
                private store$: Store,
                private popUpService: PopUpService,
                private episodeCreateEditService: EpisodeCreateEditService) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.pageMode = params.mode.charAt(0).toUpperCase() + params.mode.slice(1);
            this.store$.dispatch(EpisodeCreateEditActions.setFormMode({
                mode: params.mode as FormModeEnum, showId: params.showId, episodeId: params.episodeId,
            }));
        });

        this.createModels();
    }

    public createModels(): void {
        this.recordAudioPopUpModel = this.popUpService.createRecordingPopUp();
        this.buttonModels = this.episodeCreateEditService.createButtons();
        this.optionSelectModel = this.episodeCreateEditService.createSelectOptions();
        this.seriesModels = this.episodeCreateEditService.createSeriesTags();
        this.uploadAudioModel = this.episodeCreateEditService.createUploadAudio();
        this.recordAudioModel = this.episodeCreateEditService.createRecordAudio();
        this.uploadImageModel = this.episodeCreateEditService.createUploadImage();
        this.titleInputModel = this.episodeCreateEditService.createTextInputField(
            this.store$.select(EpisodeCreateEditSelectors.selectTitle),
            'Episode Title',
                (value: string, model: AmphoraInputFieldModel) => this.store$.dispatch(EpisodeCreateEditActions.input({
                    value,
                    field: EpisodeCreateFormEnum.TITLE,
                })),
        );
        this.seasonInputFieldModel = this.episodeCreateEditService.createNumberInputField(
            this.store$.select(EpisodeCreateEditSelectors.selectSeasonNumber),
            'Season №',
            (value: string, model: AmphoraInputFieldModel) => this.store$.dispatch(EpisodeCreateEditActions.input({
                value,
                field: EpisodeCreateFormEnum.SEASON_NUMBER,
            })),
        );
        this.episodeInputFIeldModel = this.episodeCreateEditService.createNumberInputField(
            this.store$.select(EpisodeCreateEditSelectors.selectEpisodeNumber),
            'Episode №',
            (value: string, model: AmphoraInputFieldModel) => this.store$.dispatch(EpisodeCreateEditActions.input({
                value,
                field: EpisodeCreateFormEnum.EPISODE_NUMBER,
            })),
        );
        this.descriptionTextAreaModel = this.episodeCreateEditService.createTextArea(
            this.store$.select(EpisodeCreateEditSelectors.selectDescription),
            'Description',
            (value: string, model: AmphoraTextAreaModel) => this.store$.dispatch(EpisodeCreateEditActions.input({
                value,
                field: EpisodeCreateFormEnum.DESCRIPTION,
            })),
        );
    }

}
