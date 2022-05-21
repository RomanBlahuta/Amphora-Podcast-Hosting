import {Observable} from 'rxjs';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';
import {ISize} from '../../../shared/interfaces/size.interface';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

export interface IOptional {
    inputType?: InputFieldTypesEnum;
    onInputListener?: (value: string, inputModel: AmphoraInputFieldModel) => void;
    size?: ISize;
    placeholder?: string;
}

export class AmphoraInputFieldModel {
    public value$: Observable<string>;
    public optional: IOptional;
    public valid: boolean;
    public disabled: boolean;

    constructor(value$: Observable<string>, optional?: IOptional) {
        this.value$ = value$;
        this.valid = true;
        this.disabled = false;

        this.optional = {
            onInputListener: optional?.onInputListener || undefined,
            inputType: optional?.inputType || InputFieldTypesEnum.TEXT,
            placeholder: optional?.placeholder || '',
            size: {
                width: optional?.size?.width || 480,
                widthUnit: optional?.size?.widthUnit || UnitsOfMeasurementEnum.PX,
                height: optional?.size?.height || 56,
                heightUnit: optional?.size?.heightUnit || UnitsOfMeasurementEnum.PX,
            },
        };
    }

    public static create(value$: Observable<string>, optional?: IOptional): AmphoraInputFieldModel {
        return new AmphoraInputFieldModel(value$, optional);
    }
}
