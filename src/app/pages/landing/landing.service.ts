import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../shared/enums/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';

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

    public createDiscussionImage(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.DISCUSSION, {size: {width: 688, height: 275}});
    }
}
