import {Component, OnInit} from '@angular/core';
import {LandingService} from './landing.service';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {STREAMING_BANNER_ICONS} from '../../shared/utils/constants';
import {AmphoraSliderModel} from '../../components/common/amphora-slider/amphora-slider.model';

@Component({
  selector: 'amphora-landing',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
})
export class LandingPage implements OnInit{
    public headerModel: AmphoraHeaderModel;
    public aboutSectionModel: AmphoraSectionModel;
    public featuresSectionModel: AmphoraSectionModel;
    public streamingSectionModel: AmphoraSectionModel;
    public discussionImgModel: AmphoraIconModel;
    public streamingBannerIconModels: AmphoraIconModel[];
    public featuresSliderModel: AmphoraSliderModel;
    public podcastsSliderModel: AmphoraSliderModel;

    constructor(private landingService: LandingService) {}

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.landingService.createHeader();
        this.aboutSectionModel = this.landingService.createRegularSection();
        this.featuresSectionModel = this.landingService.createOrnamentedSection();
        this.streamingSectionModel = this.landingService.createRegularSection();
        this.discussionImgModel = this.landingService.createDiscussionImage();
        this.streamingBannerIconModels = this.landingService.createStreamingBannerIcons(STREAMING_BANNER_ICONS);
        this.featuresSliderModel = this.landingService.createFeaturesSlider();
        this.podcastsSliderModel = this.landingService.createPodcastsSlider();
    }
}
