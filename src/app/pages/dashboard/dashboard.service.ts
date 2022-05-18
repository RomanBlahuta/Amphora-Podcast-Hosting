import {Injectable} from '@angular/core';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/component-types/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../shared/enums/component-types/section-types.enum';
import {AmphoraIconModel} from '../../components/common/amphora-icon/amphora-icon.model';
import {IconsEnum} from '../../shared/enums/icons.enum';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../shared/enums/component-types/button-types.enum';
import {Store} from '@ngrx/store';
import {AmphoraSearchFieldModel} from '../../components/inputs/amphora-search-field/amphora-search-field.model';
import {AmphoraPaginationModel} from '../../components/common/amphora-pagination/amphora-pagination.model';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    constructor(private store$: Store) {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.USER);
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
            buttonType: ButtonTypesEnum.DARK,
            onClick: () => console.log('Edit Profile'),
        });
    }

    public createNewShowButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('New', {
            buttonType: ButtonTypesEnum.DARK,
            onClick: () => console.log('Create New Show'),
        });
    }

    public createSearchField(): AmphoraSearchFieldModel {
        return AmphoraSearchFieldModel.create(null, {
            onInputListener: () => console.log('Search'),
            placeholder: 'Search Shows',
        });
    }

    public createPagination(): AmphoraPaginationModel {
        return AmphoraPaginationModel.create(0, null);
    }
}
