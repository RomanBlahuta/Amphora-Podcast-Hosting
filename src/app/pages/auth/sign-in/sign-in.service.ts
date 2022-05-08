import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/header-types.enum';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../../shared/enums/section-types.enum';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/button-types.enum';


@Injectable({
    providedIn: 'root',
})
export class SignInService {
    constructor(private store$: Store) {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.SIGN_UP);
    }

    public createRegularSection() {
        return AmphoraSectionModel.create();
    }

    public createOrnamentedSection() {
        return AmphoraSectionModel.create({
            ornaments: true,
            sectionType: SectionTypesEnum.PRIMARY,
        });
    }

    public createSubmitButton(): AmphoraButtonModel {
        return AmphoraButtonModel.create('Sign In', {
            buttonType: ButtonTypesEnum.WHITE,
            onClick: () => console.log('Signed In!'),
        });
    }
}
