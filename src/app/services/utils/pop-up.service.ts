import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {PopUpActions} from '../../store/pop-up/pop-up.actions';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {AmphoraCommonPopUpModel} from '../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../shared/enums/component-types/button-types.enum';
import {ContentTypesEnum} from '../../shared/enums/content-types.enum';
import {AmphoraRecordAudioPopUpModel} from '../../components/pop-ups/amphora-record-audio-pop-up/amphora-record-audio-pop-up.model';
import {EpisodeCreateEditActions} from '../../store/episode-create-edit/episode-create-edit.actions';

@Injectable({
    providedIn: 'root',
})
export class PopUpService {
    constructor(private store$: Store) {
    }

    public showPopUp(popUpType: PopUpTypesEnum): void {
        this.store$.dispatch(PopUpActions.showPopUp({ popUpType }));
    }

    public hidePopUp(): void {
        this.store$.dispatch(PopUpActions.hidePopUp());
    }

    public showErrorPopUp(errorMessage: string): void {
        this.store$.dispatch(PopUpActions.showErrorPopUp({ errorMessage }));
    }

    public hideErrorPopUp(): void {
        this.store$.dispatch(PopUpActions.hideErrorPopUp());
    }

    public showConfirmDeletionPopUp(item: string, contentType: ContentTypesEnum, id: string): void {
        this.store$.dispatch(PopUpActions.showConfirmDeletionPopUp({item, contentType, id}));
    }

    public hideConfirmDeletionPopUp(): void {
        this.store$.dispatch(PopUpActions.hideConfirmDeletionPopUp());
    }

    public createSuccessPopUp(onButtonClick: () => void): AmphoraCommonPopUpModel {
        return AmphoraCommonPopUpModel.create('Success!', {
            buttons: [
                AmphoraButtonModel.create('OK', {
                    buttonColor: ButtonColorsEnum.WHITE,
                    onClick: onButtonClick,
                }),
            ],
            popUpType: PopUpTypesEnum.SUCCESS,
        });
    }

    public createCheckYourEmailPopUp(onButtonClicks: {resendOnClick: () => void; okOnClick: () => void}): AmphoraCommonPopUpModel {
        return AmphoraCommonPopUpModel.create('Check Your Email!', {
            buttons: [
                AmphoraButtonModel.create('Resend letter', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    onClick: onButtonClicks.resendOnClick,
                    size: {
                        width: 126,
                        height: 40,
                    }
                }),
                AmphoraButtonModel.create('OK', {
                    buttonColor: ButtonColorsEnum.WHITE,
                    onClick: onButtonClicks.okOnClick,
                }),
            ],
            popUpType: PopUpTypesEnum.CHECK_EMAIL,
        });
    }

    public createStreamingOptionsPopUp(onButtonClick: () => void): AmphoraCommonPopUpModel {
        return AmphoraCommonPopUpModel.create('Streaming Options', {
            buttons: [
                AmphoraButtonModel.create('Apply', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    onClick: onButtonClick,
                }),
            ],
            popUpType: PopUpTypesEnum.STREAMING_OPTIONS,
        });
    }

    public createRecordingPopUp(): AmphoraRecordAudioPopUpModel {
        return AmphoraRecordAudioPopUpModel.create(
            (file: File, url: string, fileName: string, duration: number) => this.store$.dispatch(
                EpisodeCreateEditActions.createRecordedAudio(
                {file, url, fileName, duration}
            )),
        );
    }

    public createRecordingCommonPopUp(): AmphoraCommonPopUpModel {
        return AmphoraCommonPopUpModel.create('Recording Audio', {
            popUpType: PopUpTypesEnum.RECORDING,
            buttons: [],
        });
    }
}
