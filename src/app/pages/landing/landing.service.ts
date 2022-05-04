import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../shared/enums/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {ISize} from '../../shared/interfaces/size.interface';

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

    public createStreamingBannerIcons(icons: IconsEnum[]): AmphoraIconModel[] {
        return icons.map(icon => AmphoraIconModel.create(icon, {size: this.getIconSize(icon)}));
    }

    private getIconSize(icon: IconsEnum): ISize {
        switch (icon) {
            case IconsEnum.CIRCLES:
                return {width: 32, height: 32};
            case IconsEnum.YOUTUBE:
                return {width: 80, height: 80};
            default:
                return {width: 64, height: 64};
        }
    }
}
