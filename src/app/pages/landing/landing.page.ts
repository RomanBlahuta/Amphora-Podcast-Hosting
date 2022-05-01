import {Component, OnInit} from '@angular/core';
import {LandingService} from './landing.service';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';

@Component({
  selector: 'amphora-home',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
})
export class LandingPage implements OnInit{
    public headerModel: AmphoraHeaderModel;
    public aboutSectionModel: AmphoraSectionModel;
    public featuresSectionModel: AmphoraSectionModel;
    public streamingSectionModel: AmphoraSectionModel;

    constructor(private landingService: LandingService) {}

    public ngOnInit(): void {
        this.headerModel = this.landingService.createHeader();
        this.aboutSectionModel = this.landingService.createOrnamentedSection();
        this.featuresSectionModel = this.landingService.createOrnamentedSection();
        this.streamingSectionModel = this.landingService.createOrnamentedSection();
    }
}
