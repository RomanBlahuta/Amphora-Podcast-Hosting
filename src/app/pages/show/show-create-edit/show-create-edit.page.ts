import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowCreateEditService} from './show-create-edit.service';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraCommonPopUpModel} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';
import {ShowCreateEditSelectors} from '../../../store/show-create-edit/show-create-edit.selectors';
import {Store} from '@ngrx/store';
import {ShowCreateEditActions} from '../../../store/show-create-edit/show-create-edit.actions';
import {ShowCreateFormEnum} from '../../../shared/enums/forms/show-create-form.enum';
import {Observable} from 'rxjs';
import {StreamingIntegrationsEnum} from '../../../shared/enums/streaming-integrations.enum';
import {IconsEnum} from '../../../shared/enums/icons.enum';

@Component({
    selector: 'amphora-show-create-edit',
    templateUrl: './show-create-edit.page.html',
    styleUrls: ['./show-create-edit.page.scss'],
})
export class ShowCreateEditPage implements OnInit {
    public pageMode: string;
    public buttonModels: AmphoraButtonModel[];
    public titleInputModel: AmphoraInputFieldModel;
    public descriptionTextAreaModel: AmphoraTextAreaModel;
    public createSeriesInputModel: AmphoraInputFieldModel;
    public streamingOptionsButtonModel: AmphoraButtonModel;
    public uploadImageModel: AmphoraUploadImageModel;
    public addSeriesButtonModel: AmphoraButtonModel;
    public seriesModels: Observable<AmphoraSeriesTagModel[]>;
    public streamingPopUpModel: AmphoraCommonPopUpModel;
    public streamingIconModels: AmphoraIconModel[];

    constructor(private route: ActivatedRoute,
                public store$: Store,
                private showCreateEditService: ShowCreateEditService,
                private popUpService: PopUpService) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.pageMode = params.mode.charAt(0).toUpperCase() + params.mode.slice(1);
            console.log('mode: ', params.mode);
            console.log('id: ', params.id);
        });

        this.createModels();
    }

    public onSelectStreamingOption(option: IconsEnum): void {
        this.store$.dispatch(ShowCreateEditActions.selectStreamingOption({option: option as unknown as StreamingIntegrationsEnum}));
    }

    public createModels(): void {
        this.buttonModels = this.showCreateEditService.createButtons();
        this.seriesModels = this.showCreateEditService.createSeriesTags();
        this.addSeriesButtonModel = this.showCreateEditService.createAddSeriesButton();
        this.uploadImageModel = this.showCreateEditService.createUploadImage();
        this.streamingOptionsButtonModel = this.showCreateEditService.createStreamingOptionsButton();
        this.streamingIconModels = this.showCreateEditService.createStreamingIcons();
        this.titleInputModel = this.showCreateEditService.createTextInputField(
            this.store$.select(ShowCreateEditSelectors.selectTitle),
            'Show Title',
            this.onInput(ShowCreateFormEnum.TITLE).bind(this),
        );
        this.createSeriesInputModel = this.showCreateEditService.createSeriesTagTextInputField(
            this.store$.select(ShowCreateEditSelectors.selectSeriesTitle),
            'Add Series',
            this.onInput(ShowCreateFormEnum.SERIES_TITLE).bind(this),
        );
        this.descriptionTextAreaModel = this.showCreateEditService.createTextArea(
            null,
            'Description',
            this.onInput(ShowCreateFormEnum.DESCRIPTION).bind(this),
        );
        this.streamingPopUpModel = this.popUpService.createStreamingOptionsPopUp(() => this.popUpService.hidePopUp());
    }

    private onInput(field: ShowCreateFormEnum): (value: string, model: AmphoraInputFieldModel | AmphoraTextAreaModel) => void {
        return (value: string, model: AmphoraInputFieldModel | AmphoraTextAreaModel) => this.store$.dispatch(
            ShowCreateEditActions.input({
                value,
                field,
        }));
    }
}
