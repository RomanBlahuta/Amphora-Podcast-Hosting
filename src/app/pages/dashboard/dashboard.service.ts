import {Injectable} from '@angular/core';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../shared/enums/component-types/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../shared/enums/component-types/button-types.enum';
import {Store} from '@ngrx/store';
import {AmphoraSearchFieldModel} from '../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraPaginationModel} from '../../components/common/amphora-pagination/amphora-pagination.model';
import {DashboardSelectors} from '../../store/dashboard/dashboard.selectors';
import {AmphoraShowPreviewCardModel} from '../../components/cards/amphora-show-preview-card/amphora-show-preview-card.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DashboardActions} from '../../store/dashboard/dashboard.actions';
import {FormControl} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../shared/enums/routes.enum';
import {parseDurationTimeUtil} from '../../shared/utils/utils';
import {UserSelectors} from '../../store/user/user.selectors';
import {AmphoraNotificationPopUpModel} from '../../components/pop-ups/amphora-notification-pop-up/amphora-notification-pop-up.model';
import {SignUpActions} from '../../store/sign-up/sign-up.actions';
import {PopUpTypesEnum} from '../../shared/enums/component-types/pop-up-types.enum';
import {PopUpService} from '../../services/utils/pop-up.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    constructor(private store$: Store,
                private popUpService: PopUpService,
                private navController: NavController) {
    }

    public createProfileSection(): AmphoraSectionModel {
        return AmphoraSectionModel.create({
            sectionType: SectionTypesEnum.PRIMARY,
            ornaments: SectionOrnamentTypesEnum.ORNAMENTED_TOP,
        });
    }

    public createRegularSection(): AmphoraSectionModel {
        return AmphoraSectionModel.create();
    }

    public createProfilePicture(): AmphoraIconModel {
        return AmphoraIconModel.create(IconsEnum.PROFILE_PICTURE, {
            size: {
                width: 128,
                height: 128,
            }
        });
    }

    public createEditButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Edit', {
            buttonColor: ButtonColorsEnum.DARK,
            onClick: () => console.log('Edit Profile'),
        });
    }

    public createNotification(): AmphoraNotificationPopUpModel {
        return AmphoraNotificationPopUpModel.create(this.store$.select(UserSelectors.selectIsUserUnverified), {
            label: 'Unverified users cannot upload and manage content.',
            buttonLabel: 'Verify',
            onClick: () => {
                this.store$.dispatch(SignUpActions.requestVerificationToken());
                this.popUpService.showPopUp(PopUpTypesEnum.CHECK_EMAIL);
            }
        });
    }

    public createNewShowButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('New', {
            buttonColor: ButtonColorsEnum.DARK,
            disabled$: this.store$.select(UserSelectors.selectIsUserUnverified),
            onClick: () => this.navController.navigateRoot(RoutesEnum.SHOW_CREATE),
        });
    }

    public createSearchField(formControl: FormControl): AmphoraSearchFieldModel {
        return AmphoraSearchFieldModel.create(this.store$.select(DashboardSelectors.selectSearchString), {
            onInputListener: (value: string, inputModel: AmphoraSearchFieldModel) => this.store$.dispatch(DashboardActions.search({value})),
            placeholder: 'Search Shows',
            formControl,
            onDebouncedSearch: () => this.store$.dispatch(DashboardActions.loadShows()),
        });
    }

    public createShowPreviewCards(): Observable<AmphoraShowPreviewCardModel[]> {
        return this.store$.select(DashboardSelectors.selectAllShows).pipe(
            map(shows => shows.map(show => AmphoraShowPreviewCardModel.create(show.title, {
                image: show.media_link,
                series: show.series.length,
                episodes: show.episodes_number,
                totalWatchTime: parseDurationTimeUtil(show.duration),
                onButtonClick: () => this.navController.navigateRoot(RoutesEnum.SHOW + '/' + show.id),
                streamingIntegrations: show.selected_streamings,
            })))
        );
    }

    public createPagination(): AmphoraPaginationModel {
        return AmphoraPaginationModel.create(
            this.store$.select(DashboardSelectors.selectTotalPages),
            this.store$.select(DashboardSelectors.selectCurrentPage),
            this.store$.select(DashboardSelectors.selectDisplayedIndexes), {
                onClickNumber: index => this.store$.dispatch(DashboardActions.changePage({index})),
                onClickBack: index => this.store$.dispatch(DashboardActions.changePage({index: index - 1})),
                onClickForward: index => this.store$.dispatch(DashboardActions.changePage({index: index + 1})),
            });
    }
}
