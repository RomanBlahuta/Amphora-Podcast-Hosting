import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {DashboardService} from './dashboard.service';
import {AmphoraSearchFieldModel} from '../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraShowPreviewCardModel} from '../../components/cards/amphora-show-preview-card/amphora-show-preview-card.model';
import {AmphoraPaginationModel} from '../../components/common/amphora-pagination/amphora-pagination.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {Store} from '@ngrx/store';
import {UserActions} from '../../store/user/user.actions';
import {Observable, Subject} from 'rxjs';
import {UserSelectors} from '../../store/user/user.selectors';
import {DashboardActions} from '../../store/dashboard/dashboard.actions';
import {FormControl} from '@angular/forms';
import {DashboardSelectors} from '../../store/dashboard/dashboard.selectors';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'amphora-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
    public username: Observable<string>;
    public email: Observable<string>;
    public isLoading: Observable<boolean>;

    public profileSectionModel: AmphoraSectionModel;
    public profilePictureModel: AmphoraIconModel;
    public listSectionModel: AmphoraSectionModel;
    public editButtonModel: AmphoraButtonModel;
    public newShowButtonModel: AmphoraButtonModel;
    public searchFieldModel: AmphoraSearchFieldModel;
    public showPreviewModels: Observable<AmphoraShowPreviewCardModel[]>;
    public paginationModel: AmphoraPaginationModel;
    public searchShowController: FormControl;
    public unsubscribe$ = new Subject();

    constructor(private dashBoardService: DashboardService,
                private store$: Store) { }

    public ngOnInit(): void {
        this.store$.dispatch(UserActions.loadUser());
        this.store$.dispatch(DashboardActions.loadShows());

        this.username = this.store$.select(UserSelectors.selectFullName);
        this.isLoading = this.store$.select(DashboardSelectors.selectIsLoading);
        this.email = this.store$.select(UserSelectors.selectEmail);
        this.store$.select(DashboardSelectors.selectSearchString).pipe(
            takeUntil(this.unsubscribe$),
        ).subscribe(search => this.searchShowController = new FormControl(search));
        this.createModels();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private createModels(): void {
        this.profileSectionModel = this.dashBoardService.createProfileSection();
        this.listSectionModel = this.dashBoardService.createRegularSection();
        this.profilePictureModel = this.dashBoardService.createProfilePicture();
        this.editButtonModel = this.dashBoardService.createEditButton();
        this.newShowButtonModel = this.dashBoardService.createNewShowButton();
        this.searchFieldModel = this.dashBoardService.createSearchField(this.searchShowController);
        this.showPreviewModels = this.dashBoardService.createShowPreviewCards();
        this.paginationModel = this.dashBoardService.createPagination();
    }
}
