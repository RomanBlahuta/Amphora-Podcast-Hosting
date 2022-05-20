import {Component, OnInit} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {DashboardService} from './dashboard.service';
import {AmphoraSearchFieldModel} from '../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraShowPreviewCardModel} from '../../components/cards/amphora-show-preview-card/amphora-show-preview-card.model';
import {AmphoraPaginationModel} from '../../components/common/amphora-pagination/amphora-pagination.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {StreamingIntegrationsEnum} from '../../shared/enums/streaming-integrations.enum';

@Component({
    selector: 'amphora-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    public headerModel: AmphoraHeaderModel;
    public profileSectionModel: AmphoraSectionModel;
    public profilePictureModel: AmphoraIconModel;
    public listSectionModel: AmphoraSectionModel;
    public editButtonModel: AmphoraButtonModel;
    public newShowButtonModel: AmphoraButtonModel;
    public searchFieldModel: AmphoraSearchFieldModel;
    public showPreviewModels: AmphoraShowPreviewCardModel[];
    public paginationModel: AmphoraPaginationModel;

    constructor(private dashBoardService: DashboardService) { }

    public ngOnInit(): void {
        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.dashBoardService.createHeader();
        this.profileSectionModel = this.dashBoardService.createProfileSection();
        this.listSectionModel = this.dashBoardService.createRegularSection();
        this.profilePictureModel = this.dashBoardService.createProfilePicture();
        this.editButtonModel = this.dashBoardService.createEditButton();
        this.newShowButtonModel = this.dashBoardService.createNewShowButton();
        this.searchFieldModel = this.dashBoardService.createSearchField();
        this.showPreviewModels = [
            AmphoraShowPreviewCardModel.create('Lorem dolor ipsum sir amet', {
                streamingIntegrations: [
                    StreamingIntegrationsEnum.APPLE_PODCASTS,
                    StreamingIntegrationsEnum.SPOTIFY,
                    StreamingIntegrationsEnum.GOOGLE_PODCASTS
                ],
                episodes: 100,
                series: 5,
                totalWatchTime: '10h 11m 40s',
                onButtonClick: () => {
                    console.log('Click!');
                }
            }),
            AmphoraShowPreviewCardModel.create('Lorem dolor ipsum sir amet', {
                streamingIntegrations: [
                    StreamingIntegrationsEnum.APPLE_PODCASTS,
                    StreamingIntegrationsEnum.SPOTIFY,
                    StreamingIntegrationsEnum.GOOGLE_PODCASTS
                ],
                episodes: 100,
                series: 5,
                totalWatchTime: '10h 11m 40s',
                onButtonClick: () => {
                    console.log('Click!');
                }
            }),
            AmphoraShowPreviewCardModel.create('Lorem dolor ipsum sir amet', {
                streamingIntegrations: [
                    StreamingIntegrationsEnum.APPLE_PODCASTS,
                    StreamingIntegrationsEnum.SPOTIFY,
                    StreamingIntegrationsEnum.GOOGLE_PODCASTS
                ],
                episodes: 100,
                series: 5,
                totalWatchTime: '10h 11m 40s',
                onButtonClick: () => {
                    console.log('Click!');
                }
            }),
            AmphoraShowPreviewCardModel.create('Lorem dolor ipsum sir amet', {
                streamingIntegrations: [
                    StreamingIntegrationsEnum.APPLE_PODCASTS,
                    StreamingIntegrationsEnum.SPOTIFY,
                    StreamingIntegrationsEnum.GOOGLE_PODCASTS
                ],
                episodes: 100,
                series: 5,
                totalWatchTime: '10h 11m 40s',
                onButtonClick: () => {
                    console.log('Click!');
                }
            }),
        ];
        this.paginationModel = this.dashBoardService.createPagination();
    }

}
