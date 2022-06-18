import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
import {Observable} from 'rxjs';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {AmphoraUploadAudioModel} from '../../../components/inputs/amphora-upload-audio/amphora-upload-audio.model';
import {AmphoraOptionsSelectModel} from '../../../components/inputs/amphora-options-select/amphora-options-select.model';
import {EpisodeCreateEditSelectors} from '../../../store/episode-create-edit/episode-create-edit.selectors';
import {EpisodeCreateEditActions} from '../../../store/episode-create-edit/episode-create-edit.actions';
import {EpisodeCreateFormEnum} from '../../../shared/enums/forms/episode-create-form.enum';
import {AmphoraRecordAudioModel} from '../../../components/inputs/amphora-record-audio/amphora-record-audio.model';
import {map} from 'rxjs/operators';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Injectable({
    providedIn: 'root',
})
export class EpisodeCreateEditService {
    constructor(private store$: Store,
                private navController: NavController) {
    }

    public createSelectOptions(): AmphoraOptionsSelectModel {
        return  AmphoraOptionsSelectModel.create(this.store$.select(EpisodeCreateEditSelectors.selectEpisodeType), {
            onOptionClick: option => this.store$.dispatch(EpisodeCreateEditActions.input({
                value: option, field: EpisodeCreateFormEnum.EPISODE_TYPE
            })),
        });
    }

    public createUploadAudio(): AmphoraUploadAudioModel {
        return AmphoraUploadAudioModel.create(
            this.store$.select(EpisodeCreateEditSelectors.selectAudioUrl),
            (file: File, url: string, fileName: string) => this.store$.dispatch(EpisodeCreateEditActions.createAudio({
                file, url, fileName,
            })));
    }

    public createRecordAudio(): AmphoraRecordAudioModel {
        return AmphoraRecordAudioModel.create(
            this.store$.select(EpisodeCreateEditSelectors.selectAudioUrl),
            (file: File, url: string, fileName: string) => this.store$.dispatch(EpisodeCreateEditActions.createAudio({
                file, url, fileName,
            })));
    }

    public createButtons(): AmphoraButtonModel[] {
        return [
            AmphoraButtonModel.create('Submit', {
                buttonColor: ButtonColorsEnum.PRIMARY,
                onClick: () => this.store$.dispatch(EpisodeCreateEditActions.submit()),
                disabled$: this.store$.select(EpisodeCreateEditSelectors.selectIsButtonDisabled),
                size: {
                    width: 400,
                    height: 40,
                }
            }),

            AmphoraButtonModel.create('Cancel', {
                buttonColor: ButtonColorsEnum.WHITE,
                onClick: () => {
                    this.store$.dispatch(EpisodeCreateEditActions.clear());
                    this.navController.navigateRoot(RoutesEnum.DASHBOARD);
                },
                size: {
                    width: 400,
                    height: 40,
                }
            }),
        ];
    }

    public createTextInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.TEXT,
            onInputListener: onInput,
            placeholder,
            size: {
                width: 40,
                widthUnit: UnitsOfMeasurementEnum.VW,
            }
        });
    }

    public createSeriesTagTextInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.TEXT,
            onInputListener: onInput,
            placeholder,
            size: {
                width: 40,
                widthUnit: UnitsOfMeasurementEnum.VW,
                widthDiff: 104,
            }
        });
    }

    public createTextArea(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraTextAreaModel) => void): AmphoraTextAreaModel {
        return AmphoraTextAreaModel.create(valueController, {
            onInputListener: onInput,
            placeholder,
            rows: 10,
            cols: 100,
            size: {
                height: 256,
                width: 40,
                widthUnit: UnitsOfMeasurementEnum.VW,
            },
        });
    }

    public createNumberInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.NUMBER,
            onInputListener: onInput,
            placeholder,
            size: {
                width: 19,
                widthUnit: UnitsOfMeasurementEnum.VW,
            }
        });
    }

    public createSeriesTags(): Observable<AmphoraSeriesTagModel[]> {
        return this.store$.select(EpisodeCreateEditSelectors.selectAllSeries).pipe(
            map(seriesList => seriesList.map(series => AmphoraSeriesTagModel.create(series, {
                onClick: () => this.store$.dispatch(EpisodeCreateEditActions.selectSeries({series})),
                active$: this.store$.select(EpisodeCreateEditSelectors.selectIsSeriesActive, series),
            })))
        );
    }

    public createUploadImage(): AmphoraUploadImageModel {
        return AmphoraUploadImageModel.create(
            this.store$.select(EpisodeCreateEditSelectors.selectImageUrl),
            (file: File, url: string, fileName: string) => this.store$.dispatch(
                EpisodeCreateEditActions.createImage({file, url, fileName})
            ),
        );
    }
}

// let chunks = [];
//
// let onSuccess = function(stream) {
//     const mediaRecorder = new MediaRecorder(stream);
//
//     record.onclick = function() {
//         mediaRecorder.start();
//         stop.disabled = false;
//         record.disabled = true;
//     }
//
//     stop.onclick = function() {
//         mediaRecorder.stop();
//         stop.disabled = true;
//         record.disabled = false;
//     }
//
//     mediaRecorder.onstop = function(e) {
//         audio.controls = true;
//         const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
//         chunks = [];
//         const audioURL = window.URL.createObjectURL(blob);
//         audio.src = audioURL;
//
//         deleteButton.onclick = function(e) {
//             let evtTgt = e.target;
//             evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
//         }
//     }
//
//     mediaRecorder.ondataavailable = function(e) {
//         chunks.push(e.data);
//     }
// }
//
// navigator.mediaDevices.getUserMedia(constraints).then(onSuccess);
