import {ISize} from '../../../shared/interfaces/size.interface';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IOptional {
    size?: ISize;
    disabled$?: Observable<boolean>;
}

export class AmphoraIconModel {
    public icon: IconsEnum;
    public optional: IOptional;

    constructor(icon: IconsEnum, optional?: IOptional) {
        this.icon = icon;
        this.optional = {
            size: {
                width: optional?.size.width || undefined,
                height: optional?.size.height || undefined,
                widthUnit: optional?.size.widthUnit || UnitsOfMeasurementEnum.PX,
                heightUnit: optional?.size.heightUnit || UnitsOfMeasurementEnum.PX,
                widthDiff: optional?.size.widthDiff || 0,
                heightDiff: optional?.size.heightDiff || 0,
                widthDiffUnit: optional?.size.widthDiffUnit || UnitsOfMeasurementEnum.PX,
                heightDiffUnit: optional?.size.heightDiffUnit || UnitsOfMeasurementEnum.PX,
            },
            disabled$: optional?.disabled$ || new BehaviorSubject(false),
        };
    }

    public static create(icon: IconsEnum, optional?: IOptional): AmphoraIconModel {
        return new AmphoraIconModel(icon, optional);
    }
}
