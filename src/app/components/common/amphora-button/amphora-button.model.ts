import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';

export interface IOptional {
    buttonType?: ButtonTypesEnum;
    onClick?: () => void;
}

export class AmphoraButtonModel {
    public label: string;
    public optional: IOptional;

    constructor(label: string, optional?: IOptional) {
        this.label = label;
        this.optional = {
            buttonType: optional?.buttonType || ButtonTypesEnum.PRIMARY,
            onClick: optional.onClick || undefined,
        };
    }

    public static create(label: string, optional?: IOptional): AmphoraButtonModel {
        return new AmphoraButtonModel(label, optional);
    }
}
