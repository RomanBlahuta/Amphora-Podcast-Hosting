import {Component, OnInit} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {DashboardService} from './dashboard.service';
import {AmphoraSearchFieldModel} from '../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraShowPreviewCardModel} from '../../components/cards/amphora-show-preview-card/amphora-show-preview-card.model';
import {AmphoraPaginationModel} from '../../components/common/amphora-pagination/amphora-pagination.model';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {Store} from '@ngrx/store';
import {UserActions} from '../../store/user/user.actions';
import {Observable} from 'rxjs';
import {UserSelectors} from '../../store/user/user.selectors';
import {DashboardActions} from '../../store/dashboard/dashboard.actions';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'amphora-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    public username: Observable<string>;
    public email: Observable<string>;

    public headerModel: AmphoraHeaderModel;
    public profileSectionModel: AmphoraSectionModel;
    public profilePictureModel: AmphoraIconModel;
    public listSectionModel: AmphoraSectionModel;
    public editButtonModel: AmphoraButtonModel;
    public newShowButtonModel: AmphoraButtonModel;
    public searchFieldModel: AmphoraSearchFieldModel;
    public showPreviewModels: Observable<AmphoraShowPreviewCardModel[]>;
    public paginationModel: AmphoraPaginationModel;
    public searchShowController = new FormControl('');

    constructor(private dashBoardService: DashboardService,
                private store$: Store) { }

    public ngOnInit(): void {
        this.store$.dispatch(UserActions.loadUser());
        this.store$.dispatch(DashboardActions.loadShows());

        this.username = this.store$.select(UserSelectors.selectFullName);
        this.email = this.store$.select(UserSelectors.selectEmail);
        this.createModels();
    }

    private createModels(): void {
        this.headerModel = this.dashBoardService.createHeader();
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
