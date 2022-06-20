import {Injectable} from '@angular/core';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../shared/enums/component-types/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {ISize} from '../../shared/interfaces/size.interface';
import {AmphoraSliderModel} from '../../components/common/amphora-slider/amphora-slider.model';
import {Store} from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})
export class LandingService {
    constructor(private store$: Store) {
    }

    public createRegularSection() {
        return AmphoraSectionModel.create();
    }

    public createOrnamentedSection() {
        return AmphoraSectionModel.create({
            ornaments: SectionOrnamentTypesEnum.ORNAMENTED,
            sectionType: SectionTypesEnum.PRIMARY,
        });
    }

    public createDiscussionImage(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.DISCUSSION, {size: {width: 688, height: 275}});
    }

    public createStreamingBannerIcons(icons: IconsEnum[]): AmphoraIconModel[] {
        return icons.map(icon => AmphoraIconModel.create(icon, {size: this.getIconSize(icon)}));
    }

    public createFeaturesSlider(): AmphoraSliderModel {
        return AmphoraSliderModel.create(null, {
            options: {
                allowTouchMove: false,
                loop: true,
                slidesPerView: 1,
            },
        });
    }

    public createPodcastsSlider(): AmphoraSliderModel {
        // this.store$.select(LandingSelectors.selectPodcastsSlide)
        return AmphoraSliderModel.create(null, {
            options: {
                allowTouchMove: false,
                loop: true,
                slidesPerView: 2,
            },
        });
    }

    public createSliderIcons(): AmphoraIconModel[] {
        return [
            AmphoraIconModel.create(IconsEnum.PANDORAS_BOX, {size: {width: 256, height: 256}}),
            AmphoraIconModel.create(IconsEnum.SHIELD, {size: {width: 256, height: 256}}),
            AmphoraIconModel.create(IconsEnum.HERMES, {size: {width: 256, height: 256}})
        ];
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
