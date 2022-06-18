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
import {episodeComparator, parseDurationTimeUtil} from '../../../shared/utils/utils';
import {
    AmphoraConfirmDeletionPopUpModel
} from '../../../components/pop-ups/amphora-confirm-deletion-pop-up/amphora-confirm-deletion-pop-up.model';
import {ContentTypesEnum} from '../../../shared/enums/content-types.enum';
import {PopUpSelectors} from '../../../store/pop-up/pop-up.selectors';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Injectable({
    providedIn: 'root',
})
export class ShowService {
    constructor(private store$: Store,
                private navController: NavController,
                private popUpService: PopUpService) {
    }

    public createSearchField(showId: string, formControl: FormControl): AmphoraSearchFieldModel {
        return AmphoraSearchFieldModel.create(this.store$.select(ShowSelectors.selectSearchString), {
            onInputListener: (value: string, inputModel: AmphoraSearchFieldModel) => this.store$.dispatch(ShowActions.search({value})),
            placeholder: 'Search Episodes',
            onDebouncedSearch: () => this.store$.dispatch(ShowActions.loadShowEpisodes({id: showId})),
            formControl,
        });
    }

    public createButtons(): Observable<AmphoraButtonModel[]> {
        return this.store$.select(ShowSelectors.selectShowData).pipe(
            map(data => [
                AmphoraButtonModel.create('Edit', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    onClick: () => this.navController.navigateRoot(`${RoutesEnum.SHOW_EDIT}/${data.id}`),
                    size: {
                        width: 400,
                        height: 40,
                    }
                }),

                AmphoraButtonModel.create('Add Episode', {
                    buttonColor: ButtonColorsEnum.WHITE,
                    onClick: () => this.navController.navigateRoot(RoutesEnum.EPISODE + '/' + data.id + '/create/new'),
                    size: {
                        width: 400,
                        height: 40,
                    }
                }),

                AmphoraButtonModel.create('Get RSS-Feed Link', {
                    buttonColor: ButtonColorsEnum.ACCENT,
                    onClick: () => navigator.clipboard.writeText(data.feed_file_link),
                    size: {
                        width: 400,
                        height: 40,
                    }
                }),

                AmphoraButtonModel.create('Delete', {
                    buttonColor: ButtonColorsEnum.DARK,
                    onClick: () => this.popUpService.showConfirmDeletionPopUp(data.title, ContentTypesEnum.SHOW, data.id),
                    size: {
                        width: 400,
                        height: 40,
                    }
                }),
            ])
        );
    }

    public createConfirmDeletionPopUp(): Observable<AmphoraConfirmDeletionPopUpModel> {
        return this.store$.select(PopUpSelectors.selectConfirmDeletionPopUp).pipe(
            map(data => AmphoraConfirmDeletionPopUpModel.create(
                data.confirmDeletion,
                data.confirmDeletionType,
                (data.confirmDeletionType === ContentTypesEnum.SHOW) ?
                    () => this.store$.dispatch(ShowActions.deleteShow())
                    :
                    () => this.store$.dispatch(ShowActions.deleteEpisode({id: data.confirmDeletionId})),
            )),
        );

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

    public createStreamingIcons(): Observable<AmphoraIconModel[]> {
        return this.store$.select(ShowSelectors.selectStreamingOptions).pipe(
            map(streamingOptions => streamingOptions.map(option => AmphoraIconModel.create(
                option as unknown as IconsEnum, {
                size: {
                    width: 64,
                    height: 64,
                }
            }),))
        );
    }

    public createEpisodeCards(): Observable<AmphoraEpisodeCardModel[]> {
        return this.store$.select(ShowSelectors.selectShowEpisodes).pipe(
            map(episodes => [...episodes].sort(episodeComparator).map(episode => AmphoraEpisodeCardModel.create(
                    episode.title,
                    {
                        id: episode.id,
                        season: episode.season_num,
                        audio: episode.file_link,
                        episode: episode.episode_num,
                        watchTime: parseDurationTimeUtil(episode.duration),
                        description: episode.description,
                        onEdit: () => this.navController.navigateRoot(`${RoutesEnum.EPISODE}/${episode.show_id}/edit/${episode.id}`),
                        onDelete: () => this.popUpService.showConfirmDeletionPopUp(episode.title, ContentTypesEnum.EPISODE, episode.id),
                        onSeriesTagClick: () => this.store$.dispatch(ShowActions.setActiveSeries({id: episode.series})),
                        isSeriesActive$: this.store$.select(ShowSelectors.selectIsSeriesActive, episode.series),
                        series: episode.series,
                        img: episode.cover_link,
                    },
                ),
            )),
        );
    }
}
