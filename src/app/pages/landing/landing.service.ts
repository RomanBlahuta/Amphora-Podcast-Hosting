import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../shared/enums/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {ISize} from '../../shared/interfaces/size.interface';
import {AmphoraSliderModel} from '../../components/common/amphora-slider/amphora-slider.model';
import {Store} from '@ngrx/store';
import {LandingSelectors} from '../../store/landing/landing.selectors';
import {LandingActions} from '../../store/landing/landing.actions';

@Injectable({
    providedIn: 'root',
})
export class LandingService {
    constructor(private store$: Store) {
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

    public createFeaturesSlider(): AmphoraSliderModel {
        return AmphoraSliderModel.create(this.store$.select(LandingSelectors.selectFeaturesSlide), {
            options: {
                allowTouchMove: false,
                loop: false,
                slidesPerView: 1,
            },
            onClickPrevious: (currentSlide: number) => this.store$.dispatch(LandingActions.changeFeatureSlide({slide: currentSlide - 1})),
            onClickNext: (currentSlide: number) => this.store$.dispatch(LandingActions.changeFeatureSlide({slide: currentSlide + 1})),
        });
    }

    public createPodcastsSlider(): AmphoraSliderModel {
        return AmphoraSliderModel.create(this.store$.select(LandingSelectors.selectPodcastsSlide), {
            options: {
                allowTouchMove: false,
                loop: false,
                slidesPerView: 2,
            },
            onClickPrevious: (currentSlide: number) => this.store$.dispatch(LandingActions.changePodcastSlide({slide: currentSlide - 1})),
            onClickNext: (currentSlide: number) => this.store$.dispatch(LandingActions.changePodcastSlide({slide: currentSlide + 1})),
        });
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
