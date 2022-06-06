import {Injectable} from '@angular/core';
import {AmphoraSearchFieldModel} from '../../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../../shared/enums/component-types/button-types.enum';
import {AmphoraPaginationModel} from '../../../components/common/amphora-pagination/amphora-pagination.model';
import {Store} from '@ngrx/store';
import {ShowSelectors} from '../../../store/show/show.selectors';
import {AmphoraIconModel} from '../../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../../shared/enums/icons.enum';
import {AmphoraSeriesTagModel} from '../../../components/common/amphora-series-tag/amphora-series-tag.model';
import {ShowActions} from '../../../store/show/show.actions';
import {AmphoraEpisodeCardModel} from '../../../components/cards/amphora-episode-card/amphora-episode-card.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class ShowService {
    constructor(private store$: Store) {
    }

    public createSearchField(showId: string, formControl: FormControl): AmphoraSearchFieldModel {
        return AmphoraSearchFieldModel.create(this.store$.select(ShowSelectors.selectSearchString), {
            onInputListener: (value: string, inputModel: AmphoraSearchFieldModel) => this.store$.dispatch(ShowActions.search({value})),
            placeholder: 'Search Episodes',
            onDebouncedSearch: () => this.store$.dispatch(ShowActions.loadShowEpisodes({id: showId})),
            formControl,
        });
    }

    public createButtons(): AmphoraButtonModel[] {
        return [
            AmphoraButtonModel.create('Edit', {
                buttonColor: ButtonColorsEnum.PRIMARY,
                onClick: () => console.log('Edit'),
                size: {
                    width: 400,
                    height: 40,
                }
            }),

            AmphoraButtonModel.create('Add Episode', {
                buttonColor: ButtonColorsEnum.WHITE,
                onClick: () => console.log('Add Episode'),
                size: {
                    width: 400,
                    height: 40,
                }
            }),

            AmphoraButtonModel.create('Delete', {
                buttonColor: ButtonColorsEnum.DARK,
                onClick: () => console.log('Delete'),
                size: {
                    width: 400,
                    height: 40,
                }
            }),
        ];
    }

    public createPagination(): AmphoraPaginationModel {
        return AmphoraPaginationModel.create(
            this.store$.select(ShowSelectors.selectTotalPages),
            this.store$.select(ShowSelectors.selectCurrentPage),
            this.store$.select(ShowSelectors.selectDisplayedIndexes),
            {
                onClickBack: index =>  this.store$.dispatch(ShowActions.changePage({index: index - 1})),
                onClickNumber: index =>  this.store$.dispatch(ShowActions.changePage({index})),
                onClickForward: index =>  this.store$.dispatch(ShowActions.changePage({index: index + 1})),
            }
        );
    }

    public createSeriesTags(): Observable<AmphoraSeriesTagModel[]> {
        return this.store$.select(ShowSelectors.selectAllShowSeries).pipe(
            map(seriesList => seriesList.map(series => AmphoraSeriesTagModel.create(series, {
                onClick: () => this.store$.dispatch(ShowActions.setActiveSeries({id: series})),
                active$: this.store$.select(ShowSelectors.selectIsSeriesActive, series),
            }))),
        );
    }

    public createStreamingIcons(): AmphoraIconModel[] {
        return [
            AmphoraIconModel.create(IconsEnum.SPOTIFY, {
                size: {
                    width: 64,
                    height: 64,
                }
            }),

            AmphoraIconModel.create(IconsEnum.YOUTUBE, {
                size: {
                    width: 64,
                    height: 64,
                }
            }),
            AmphoraIconModel.create(IconsEnum.GOOGLE_PODCASTS, {
                size: {
                    width: 64,
                    height: 64,
                }
            }),

            AmphoraIconModel.create(IconsEnum.POCKET_CASTS, {
                size: {
                    width: 64,
                    height: 64,
                }
            }),
        ];
    }

    public createEpisodeCards(): Observable<AmphoraEpisodeCardModel[]> {
        return this.store$.select(ShowSelectors.selectShowEpisodes).pipe(
            map(episodes => episodes.map(episode => AmphoraEpisodeCardModel.create(
                episode.title, {
                    id: episode.id,
                    season: episode.season_num,
                    episode: episode.episode_num,
                    watchTime: `${episode.duration}`,
                    description: episode.description,
                    onSeriesTagClick: () => this.store$.dispatch(ShowActions.setActiveSeries({id: episode.series})),
                    isSeriesActive$: this.store$.select(ShowSelectors.selectIsSeriesActive, episode.series),
                    series: episode.series,
                    img: episode.cover_link,
                },
            ))),
        );
    }
}
