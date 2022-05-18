import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../../shared/enums/component-types/section-types.enum';

export interface IOptional {
    sectionType?: SectionTypesEnum;
    ornaments?: SectionOrnamentTypesEnum;
}

export class AmphoraSectionModel {
    public optional: IOptional;

    constructor(optional?: IOptional) {
        this.optional = {
            sectionType: optional?.sectionType || SectionTypesEnum.WHITE,
            ornaments: optional?.ornaments || SectionOrnamentTypesEnum.COMMON,
        };
    }

    public static create(optional?: IOptional): AmphoraSectionModel {
        return new AmphoraSectionModel(optional);
    }
}
