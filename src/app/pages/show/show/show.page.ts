import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShowService} from './show.service';
import {AmphoraSearchFieldModel} from '../../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraPaginationModel} from '../../../components/common/amphora-pagination/amphora-pagination.model';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';
import {ActivatedRoute} from '@angular/router';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {AmphoraEpisodeCardModel} from '../../../components/cards/amphora-episode-card/amphora-episode-card.model';
import {Store} from '@ngrx/store';
import {ShowActions} from '../../../store/show/show.actions';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ShowSelectors} from '../../../store/show/show.selectors';
import {ILoadShowResponseDTO} from '../../../services/http/show/show.dto';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'amphora-show',
    templateUrl: './show.page.html',
    styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit, OnDestroy {
    public searchFieldModel: AmphoraSearchFieldModel;
    public buttonModels: AmphoraButtonModel[];
    public paginationModel: AmphoraPaginationModel;
    public streamingIconModels: Observable<AmphoraIconModel[]>;
    public seriesModels: Observable<AmphoraSeriesTagModel[]>;
    public episodeCardModels: Observable<AmphoraEpisodeCardModel[]>;
    public unsubscribe$ = new Subject();
    public showData: Observable<ILoadShowResponseDTO>;
    public searchEpisodeController: FormControl;
    public showId: string;

    constructor(private showService: ShowService,
                private route: ActivatedRoute,
                private store$: Store) { }

    public ngOnInit(): void {
        this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
            this.store$.dispatch(ShowActions.loadShow({id: params.id}));
            this.showId = params.id;
        });

        this.showData = this.store$.select(ShowSelectors.selectShowData);

        this.store$.select(ShowSelectors.selectSearchString).pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(search => this.searchEpisodeController = new FormControl(search));

        this.createModels();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private createModels(): void {
        this.searchFieldModel = this.showService.createSearchField(this.showId, this.searchEpisodeController);
        this.buttonModels = this.showService.createButtons();
        this.paginationModel = this.showService.createPagination();
        this.streamingIconModels = this.showService.createStreamingIcons();
        this.seriesModels = this.showService.createSeriesTags();
        this.episodeCardModels = this.showService.createEpisodeCards();
    }
}
