import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {Observable} from 'rxjs';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';
import {AmphoraTextAreaModel} from '../../../components/inputs/amphora-text-area/amphora-text-area.model';
import {AmphoraUploadImageModel} from '../../../components/inputs/amphora-upload-image/amphora-upload-image.model';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';
import {StreamingIntegrationsEnum} from '../../../shared/enums/streaming-integrations.enum';
import {ShowCreateEditSelectors} from '../../../store/show-create-edit/show-create-edit.selectors';
import {ShowCreateEditActions} from '../../../store/show-create-edit/show-create-edit.actions';
import {map} from 'rxjs/operators';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Injectable({
    providedIn: 'root',
})
export class ShowCreateEditService {
    constructor(private store$: Store,
                private navController: NavController,
                private popUpService: PopUpService) {
    }

    public createStreamingIcons(): AmphoraIconModel[] {
        const result = [];
        for (const field in StreamingIntegrationsEnum) {
            result.push(StreamingIntegrationsEnum[field]);
        }
        return result.map(integration => AmphoraIconModel.create(integration, {
            size: {
                width: 64,
                height: 64,
            },
            disabled$: this.store$.select(ShowCreateEditSelectors.selectIsStreamingOptionSelected, integration),
        }));
    }

    public createButtons(): AmphoraButtonModel[] {
        return [
            AmphoraButtonModel.create('Submit', {
                buttonColor: ButtonColorsEnum.PRIMARY,
                disabled$: this.store$.select(ShowCreateEditSelectors.selectIsButtonDisabled),
                onClick: () => this.store$.dispatch(ShowCreateEditActions.submit()),
                size: {
                    width: 400,
                    height: 40,
                }
            }),

            AmphoraButtonModel.create('Cancel', {
                buttonColor: ButtonColorsEnum.WHITE,
                onClick: () => {
                    this.navController.navigateRoot(RoutesEnum.DASHBOARD);
                    this.store$.dispatch(ShowCreateEditActions.clear());
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

    public createAddSeriesButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Add', {
            onClick: () => this.store$.dispatch(ShowCreateEditActions.addSeries()),
            disabled$: this.store$.select(ShowCreateEditSelectors.selectIsSeriesButtonDisabled),
        });
    }

    public createStreamingOptionsButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Streaming Options', {
            size: {
                width: 40,
                widthUnit: UnitsOfMeasurementEnum.VW,
            },
            onClick: () => this.popUpService.showPopUp(PopUpTypesEnum.STREAMING_OPTIONS),
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

    public createSeriesTags(): Observable<AmphoraSeriesTagModel[]> {
        return this.store$.select(ShowCreateEditSelectors.selectAllSeries).pipe(
            map(seriesList => seriesList.map(series => AmphoraSeriesTagModel.create(series, {
                onClick: () => {
                    this.store$.dispatch(ShowCreateEditActions.removeSeries({series}));
                },
            }),)),
        );
    }

    public createUploadImage(): AmphoraUploadImageModel {
        return AmphoraUploadImageModel.create(
            this.store$.select(ShowCreateEditSelectors.selectImageUrl),
            (file: File, url: string, fileName: string) => this.store$.dispatch(
                ShowCreateEditActions.createImage({file, url, fileName})
            ),
        );
    }
}
