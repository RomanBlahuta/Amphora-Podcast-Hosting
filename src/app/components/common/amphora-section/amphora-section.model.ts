import {SectionTypesEnum} from '../../../shared/enums/section-types.enum';

export interface IOptional {
    sectionType?: SectionTypesEnum;
    ornaments?: boolean;
}

export class AmphoraSectionModel {
    public optional: IOptional;

    constructor(optional?: IOptional) {
        this.optional = {
            sectionType: optional?.sectionType || SectionTypesEnum.WHITE,
            ornaments: optional?.ornaments || false,
        };
    }

    public static create(optional?: IOptional): AmphoraSectionModel {
        return new AmphoraSectionModel(optional);
    }
}
