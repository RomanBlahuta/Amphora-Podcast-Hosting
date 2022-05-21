import { Component, OnInit } from '@angular/core';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {ShowService} from './show.service';
import {AmphoraSearchFieldModel} from '../../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraPaginationModel} from '../../../components/common/amphora-pagination/amphora-pagination.model';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';
import {ActivatedRoute} from '@angular/router';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraEpisodeCardModel} from '../../../components/cards/amphora-episode-card/amphora-episode-card.model';

@Component({
    selector: 'amphora-show',
    templateUrl: './show.page.html',
    styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
    public headerModel: AmphoraHeaderModel;
    public searchFieldModel: AmphoraSearchFieldModel;
    public buttonModels: AmphoraButtonModel[];
    public paginationModel: AmphoraPaginationModel;
    public streamingIconModels: AmphoraIconModel[];
    public seriesModels: AmphoraSeriesTagModel[];
    public episodeCardModels: AmphoraEpisodeCardModel[];

    constructor(private showService: ShowService,
                private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log('id: ', params.id);
        });

        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.showService.createHeader();
        this.searchFieldModel = this.showService.createSearchField();
        this.buttonModels = this.showService.createButtons();
        this.paginationModel = this.showService.createPagination();
        this.streamingIconModels = this.showService.createStreamingIcons();
        this.seriesModels = this.showService.createSeriesTags();
        this.episodeCardModels = this.showService.createEpisodeCards();
    }
}
