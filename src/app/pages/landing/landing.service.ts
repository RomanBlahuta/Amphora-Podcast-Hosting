import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../shared/enums/section-types.enum';

@Injectable({
    providedIn: 'root',
})
export class LandingService {
    constructor() {
    }

    public createHeader() {
        return AmphoraHeaderModel.create(HeaderTypesEnum.AUTH);
    }

    public createRegularSection() {
        return AmphoraSectionModel.create();
    }

    public createOrnamentedSection() {
        return AmphoraSectionModel.create({
            ornaments: true,
            sectionType: SectionTypesEnum.PRIMARY,
        });
    }
}
