import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../../shared/enums/component-types/header-types.enum';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {SectionTypesEnum} from '../../../shared/enums/component-types/section-types.enum';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../../shared/enums/component-types/button-types.enum';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {SignInSelectors} from '../../../store/sign-in/sign-in.selectors';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';


@Injectable({
    providedIn: 'root',
})
export class SignInService {
    constructor(private store$: Store) {
    }

    public createHeader(): AmphoraHeaderModel {
        return AmphoraHeaderModel.create(HeaderTypesEnum.SIGN_UP);
    }

    public createRegularSection(): AmphoraSectionModel {
        return AmphoraSectionModel.create();
    }

    public createOrnamentedSection(): AmphoraSectionModel {
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

    public createEmailInputField(onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(this.store$.select(SignInSelectors.selectEmail), {
            inputType: InputFieldTypesEnum.EMAIL,
            onInputListener: onInput,
            placeholder: 'Email',
        });
    }

    public createPasswordInputField(onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(this.store$.select(SignInSelectors.selectPassword), {
            inputType: InputFieldTypesEnum.PASSWORD,
            onInputListener: onInput,
            placeholder: 'Password',
        });
    }
}
