import {ISize} from '../../../shared/interfaces/size.interface';
import {Observable} from 'rxjs';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

export interface IOptional {
    onInputListener?: (value: string, inputModel: AmphoraTextAreaModel) => void;
    size?: ISize;
    placeholder?: string;
    rows?: number;
    cols?: number;
}

export class AmphoraTextAreaModel {
    public value$: Observable<string>;
    public optional: IOptional;

    constructor(value$: Observable<string>, optional?: IOptional) {
        this.value$ = value$;

        this.optional = {
            onInputListener: optional?.onInputListener || undefined,
            placeholder: optional?.placeholder || '',
            size: {
                width: optional?.size?.width || 480,
                widthUnit: optional?.size?.widthUnit || UnitsOfMeasurementEnum.PX,
                height: optional?.size?.height || 56,
                heightUnit: optional?.size?.heightUnit || UnitsOfMeasurementEnum.PX,
                widthDiff: optional?.size.widthDiff || 0,
                heightDiff: optional?.size.heightDiff || 0,
                widthDiffUnit: optional?.size.widthDiffUnit || UnitsOfMeasurementEnum.PX,
                heightDiffUnit: optional?.size.heightDiffUnit || UnitsOfMeasurementEnum.PX,
            },
        };
    }

    public static create(value$: Observable<string>, optional?: IOptional): AmphoraTextAreaModel {
        return new AmphoraTextAreaModel(value$, optional);
    }
}
