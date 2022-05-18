import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraHeaderModel} from '../../components/common/amphora-header/amphora-header.model';
import {HeaderTypesEnum} from '../../shared/enums/component-types/header-types.enum';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../shared/enums/component-types/section-types.enum';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonTypesEnum} from '../../shared/enums/component-types/button-types.enum';
import {SignInActions} from '../../store/sign-in/sign-in.actions';
import {AmphoraInputFieldModel} from '../../components/inputs/amphora-input-field/amphora-input-field.model';
import {InputFieldTypesEnum} from '../../shared/enums/component-types/input-field-types.enum';
import {AuthEnum} from '../../shared/enums/auth.enum';
import {SignUpActions} from '../../store/sign-up/sign-up.actions';
import {Observable} from 'rxjs';
import {ResetPasswordActions} from '../../store/reset-password/reset-password.actions';
import {VerificationActions} from '../../store/verification/verification.actions';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authPageType: AuthEnum;

    constructor(private store$: Store) {
    }

    public setPageType(pageType: AuthEnum): void {
        this.authPageType = pageType;
    }

    public createHeader(): AmphoraHeaderModel {
        switch (this.authPageType) {
            case AuthEnum.SIGN_IN:
                return AmphoraHeaderModel.create(HeaderTypesEnum.SIGN_UP);
            case AuthEnum.SIGN_UP:
                return AmphoraHeaderModel.create(HeaderTypesEnum.SIGN_IN);
            case AuthEnum.RESET_PASSWORD:
                return AmphoraHeaderModel.create(HeaderTypesEnum.AUTH);
            case AuthEnum.VERIFICATION:
                return AmphoraHeaderModel.create(HeaderTypesEnum.AUTH);
        }
    }

    public createRegularSection(): AmphoraSectionModel {
        return AmphoraSectionModel.create();
    }

    public createOrnamentedSection(): AmphoraSectionModel {
        return AmphoraSectionModel.create({
            ornaments: SectionOrnamentTypesEnum.ORNAMENTED,
            sectionType: SectionTypesEnum.PRIMARY,
        });
    }

    public createSubmitButton(): AmphoraButtonModel {
        switch (this.authPageType) {
            case AuthEnum.SIGN_IN:
                return AmphoraButtonModel.create('Sign In', {
                    buttonType: ButtonTypesEnum.WHITE,
                    onClick: () => this.store$.dispatch(SignInActions.submit()),
                });
            case AuthEnum.SIGN_UP:
                return AmphoraButtonModel.create('Sign Up', {
                    buttonType: ButtonTypesEnum.PRIMARY,
                    onClick: () => this.store$.dispatch(SignUpActions.submit()),
                });
            case AuthEnum.RESET_PASSWORD:
                return AmphoraButtonModel.create('Submit', {
                    buttonType: ButtonTypesEnum.PRIMARY,
                    onClick: () => this.store$.dispatch(ResetPasswordActions.submit()),
                });
            case AuthEnum.VERIFICATION:
                return AmphoraButtonModel.create('Submit', {
                    buttonType: ButtonTypesEnum.PRIMARY,
                    onClick: () => this.store$.dispatch(VerificationActions.submit()),
                });
        }
    }

    public createEmailInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.EMAIL,
            onInputListener: onInput,
            placeholder,
        });
    }

    public createTextInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.TEXT,
            onInputListener: onInput,
            placeholder,
        });
    }

    public createVerificationCodeInputField(
        valueController: Observable<string>,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.CODE,
            onInputListener: onInput,
            placeholder: 'Verification code',
        });
    }

    public createPasswordInputField(
        valueController: Observable<string>,
        placeholder: string,
        onInput: (value: string, model: AmphoraInputFieldModel) => void): AmphoraInputFieldModel {
        return AmphoraInputFieldModel.create(valueController, {
            inputType: InputFieldTypesEnum.PASSWORD,
            onInputListener: onInput,
            placeholder,
        });
    }
}
