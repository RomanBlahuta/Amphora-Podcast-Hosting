import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';
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

@Injectable({
    providedIn: 'root',
})
export class EpisodeCreateEditService {
    constructor(private store$: Store) {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.USER);
    }

    public createSelectOptions(): AmphoraOptionsSelectModel {
        return  null;
    }

    public createUploadAudio(): AmphoraUploadAudioModel {
        return AmphoraUploadAudioModel.create(null, () => {console.log('Audio');});
    }

    public createButtons(): AmphoraButtonModel[] {
        return [
            AmphoraButtonModel.create('Submit', {
                buttonColor: ButtonColorsEnum.PRIMARY,
                onClick: () => console.log('Submit'),
                size: {
                    width: 400,
                    height: 40,
                }
            }),

            AmphoraButtonModel.create('Cancel', {
                buttonColor: ButtonColorsEnum.WHITE,
                onClick: () => console.log('Cancel'),
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
            inputType: InputFieldTypesEnum.TEXT,
            onInputListener: onInput,
            placeholder,
            size: {
                width: 19,
                widthUnit: UnitsOfMeasurementEnum.VW,
            }
        });
    }

    public createSeriesTags(): AmphoraSeriesTagModel[] {
        return [
            AmphoraSeriesTagModel.create('Series #1', {
                onClick: () => {
                    console.log('Series');
                },
            }),

            AmphoraSeriesTagModel.create('Series #2', {
                onClick: () => {
                    console.log('Series');
                },
            }),

            AmphoraSeriesTagModel.create('Series #3', {
                onClick: () => {
                    console.log('Series');
                },
            }),
        ];
    }

    public createUploadImage(): AmphoraUploadImageModel {
        return AmphoraUploadImageModel.create(null, () => console.log('Upload Image'));
    }
}
