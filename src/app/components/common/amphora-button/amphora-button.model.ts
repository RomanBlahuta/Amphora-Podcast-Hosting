import {ButtonColorsEnum, ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {ISize} from '../../../shared/interfaces/size.interface';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';
import {AmphoraIconModel} from '../amphora-icon/amphora-icon.model';
import {Observable} from 'rxjs';

export interface IOptional {
    buttonType?: ButtonTypesEnum;
    buttonColor?: ButtonColorsEnum;
    size?: ISize;
    onClick?: () => void;
    iconModel?: AmphoraIconModel;
    disabled$?: Observable<boolean>;
}

export class AmphoraButtonModel {
    public label: string;
    public optional: IOptional;

    constructor(label: string, optional?: IOptional) {
        this.label = label;
        this.optional = {
            buttonColor: optional?.buttonColor || ButtonColorsEnum.PRIMARY,
            buttonType: optional?.buttonType || ButtonTypesEnum.FILLED,
            size: {
                width: 96,
                widthUnit: UnitsOfMeasurementEnum.PX,
                height: 40,
                heightUnit: UnitsOfMeasurementEnum.PX,
                ...optional?.size
            },
            onClick: optional?.onClick || undefined,
            iconModel: optional?.iconModel || undefined,
            disabled$: optional?.disabled$ || undefined,
        };
    }

    public static create(label: string, optional?: IOptional): AmphoraButtonModel {
        return new AmphoraButtonModel(label, optional);
    }
}
