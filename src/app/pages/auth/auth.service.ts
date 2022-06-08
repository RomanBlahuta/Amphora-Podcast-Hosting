import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AmphoraSectionModel} from '../../components/common/amphora-section/amphora-section.model';
import {SectionOrnamentTypesEnum, SectionTypesEnum} from '../../shared/enums/component-types/section-types.enum';
import {AmphoraButtonModel} from '../../components/common/amphora-button/amphora-button.model';
import {ButtonColorsEnum} from '../../shared/enums/component-types/button-types.enum';
import {SignInActions} from '../../store/sign-in/sign-in.actions';
import {AmphoraInputFieldModel} from '../../components/inputs/amphora-input-field/amphora-input-field.model';
import {InputFieldTypesEnum} from '../../shared/enums/component-types/input-field-types.enum';
import {AuthEnum} from '../../shared/enums/auth.enum';
import {SignUpActions} from '../../store/sign-up/sign-up.actions';
import {Observable} from 'rxjs';
import {ForgotPasswordActions} from '../../store/forgot-password/forgot-password.actions';
import {VerificationActions} from '../../store/verification/verification.actions';
import {ResetPasswordActions} from '../../store/reset-password/reset-password.actions';
import {SignInSelectors} from '../../store/sign-in/sign-in.selectors';
import {SignUpSelectors} from '../../store/sign-up/sign-up.selectors';
import {ForgotPasswordSelectors} from '../../store/forgot-password/forgot-password.selectors';
import {ResetPasswordSelectors} from '../../store/reset-password/reset-password.selectors';
import {VerificationSelectors} from '../../store/verification/verification.selectors';

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
                    buttonColor: ButtonColorsEnum.WHITE,
                    disabled$: this.store$.select(SignInSelectors.selectIsButtonDisabled),
                    onClick: () => this.store$.dispatch(SignInActions.submit()),
                });
            case AuthEnum.SIGN_UP:
                return AmphoraButtonModel.create('Sign Up', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    disabled$: this.store$.select(SignUpSelectors.selectIsButtonDisabled),
                    onClick: () => this.store$.dispatch(SignUpActions.submit()),
                });
            case AuthEnum.FORGOT_PASSWORD:
                return AmphoraButtonModel.create('Submit', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    disabled$: this.store$.select(ForgotPasswordSelectors.selectIsButtonDisabled),
                    onClick: () => this.store$.dispatch(ForgotPasswordActions.submit()),
                });
            case AuthEnum.RESET_PASSWORD:
                return AmphoraButtonModel.create('Submit', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    disabled$: this.store$.select(ResetPasswordSelectors.selectIsButtonDisabled),
                    onClick: () => this.store$.dispatch(ResetPasswordActions.submit()),
                });
            case AuthEnum.VERIFICATION:
                return AmphoraButtonModel.create('Submit', {
                    buttonColor: ButtonColorsEnum.PRIMARY,
                    disabled$: this.store$.select(VerificationSelectors.selectIsButtonDisabled),
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
            size: {
                width: 488,
                height: 64,
            },
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
            size: {
                width: 488,
                height: 64,
            },
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
            size: {
                width: 488,
                height: 64,
            },
        });
    }
}
