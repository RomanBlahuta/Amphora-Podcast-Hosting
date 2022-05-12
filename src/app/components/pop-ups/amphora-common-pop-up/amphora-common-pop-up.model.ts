import {AmphoraButtonModel} from '../../common/amphora-button/amphora-button.model';
import {PopUpTypesEnum} from '../../../shared/enums/component-types/pop-up-types.enum';

export interface IOptional {
    popUpType?: PopUpTypesEnum;
    buttons?: AmphoraButtonModel[];
}

export class AmphoraCommonPopUpModel {
    public title: string;
    public optional: IOptional;

    constructor(title: string, optional?: IOptional) {
        this.title = title;
        this.optional = {
            buttons: optional?.buttons || [],
            popUpType: optional?.popUpType || PopUpTypesEnum.MISCELLANEOUS,
        };
    }

    public static create(title: string, optional?: IOptional): AmphoraCommonPopUpModel {
        return new AmphoraCommonPopUpModel(title, optional);
    }
}
