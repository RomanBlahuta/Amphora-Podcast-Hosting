import {Component, OnInit} from '@angular/core';
import {LandingService} from './landing.service';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {STREAMING_BANNER_ICONS} from '../../shared/utils/constants';
import {AmphoraSliderModel} from '../../components/common/amphora-slider/amphora-slider.model';
import {Store} from '@ngrx/store';
import {LandingActions} from '../../store/landing/landing.actions';
import {Observable} from 'rxjs';
import {AmphoraShowCardModel} from '../../components/cards/amphora-show-card/amphora-show-card.model';

@Component({
  selector: 'amphora-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
})
export class LandingPage implements OnInit {
    public aboutSectionModel: AmphoraSectionModel;
    public featuresSectionModel: AmphoraSectionModel;
    public streamingSectionModel: AmphoraSectionModel;
    public discussionImgModel: AmphoraIconModel;
    public streamingBannerIconModels: AmphoraIconModel[];
    public featuresSliderModel: AmphoraSliderModel;
    public podcastsSliderModel: AmphoraSliderModel;
    public showCardModels$: Observable<AmphoraShowCardModel[]>;

    public sliderIconModels: AmphoraIconModel[];

    constructor(private landingService: LandingService,
                private store$: Store) {}

    public ngOnInit(): void {
        this.store$.dispatch(LandingActions.loadPodcasts());
        this.createModels();
    }

    private createModels(): void {
        this.showCardModels$ = this.landingService.createShowCards();
        this.aboutSectionModel = this.landingService.createRegularSection();
        this.featuresSectionModel = this.landingService.createOrnamentedSection();
        this.streamingSectionModel = this.landingService.createRegularSection();
        this.discussionImgModel = this.landingService.createDiscussionImage();
        this.streamingBannerIconModels = this.landingService.createStreamingBannerIcons(STREAMING_BANNER_ICONS);
        this.featuresSliderModel = this.landingService.createFeaturesSlider();
        this.podcastsSliderModel = this.landingService.createPodcastsSlider();

        this.sliderIconModels = this.landingService.createSliderIcons();
    }
}
