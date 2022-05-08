import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';

export class AmphoraHeaderModel {
    public headerType: HeaderTypesEnum;

    constructor(headerType: HeaderTypesEnum) {
        this.headerType = headerType;
    }

    public static create(headerType: HeaderTypesEnum): AmphoraHeaderModel {
        return new AmphoraHeaderModel(headerType);
    }
}
