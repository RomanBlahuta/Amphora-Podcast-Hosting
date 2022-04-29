import {ISize} from '../../../shared/interfaces/size';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {UnitsOfMeasurementEnum} from '../../../shared/enums/units-of-measurement.enum';

export interface IOptional {
    size?: ISize;
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
            },
        };
    }

    public static create(icon: IconsEnum, optional?: IOptional): AmphoraIconModel {
        return new AmphoraIconModel(icon, optional);
    }
}
