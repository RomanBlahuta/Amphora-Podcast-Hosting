import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';
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

@Injectable({
    providedIn: 'root',
})
export class ShowService {
    constructor(private store$: Store) {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.USER);
    }

    public createSearchField(): AmphoraSearchFieldModel {
        return AmphoraSearchFieldModel.create(null, {
            onInputListener: () => console.log('Search'),
            placeholder: 'Search Shows',
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
        );
    }

    public createSeriesTags(): AmphoraSeriesTagModel[] {
        return [
            AmphoraSeriesTagModel.create('Series #1', {
                id: 1,
                onClick: () => {
                    console.log('Series');
                    this.store$.dispatch(ShowActions.setActiveSeries({id: 1}));
                },
                active$: this.store$.select(ShowSelectors.selectIsSeriesActive, 1),
            }),

            AmphoraSeriesTagModel.create('Series #2', {
                id: 2,
                onClick: () => {
                    console.log('Series');
                    this.store$.dispatch(ShowActions.setActiveSeries({id: 2}));
                },
                active$: this.store$.select(ShowSelectors.selectIsSeriesActive, 2),
            }),

            AmphoraSeriesTagModel.create('Series #3', {
                id: 3,
                onClick: () => {
                    console.log('Series');
                    this.store$.dispatch(ShowActions.setActiveSeries({id: 3}));
                },
                active$: this.store$.select(ShowSelectors.selectIsSeriesActive, 3),
            }),
        ];
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
}
