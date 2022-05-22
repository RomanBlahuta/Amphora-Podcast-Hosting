import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {Store} from '@ngrx/store';
import {take} from 'rxjs/operators';
import {SignUpFormEnum} from '../../../shared/enums/forms/auth-forms.enum';
import {AuthService} from '../auth.service';
import {AuthEnum} from '../../../shared/enums/auth.enum';
import {SignUpSelectors} from '../../../store/sign-up/sign-up.selectors';
import {SignUpActions} from '../../../store/sign-up/sign-up.actions';
import {NavController} from '@ionic/angular';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {AmphoraCommonPopUpModel} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
  selector: 'amphora-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    public signUpForm = this.formBuilder.group({
        [SignUpFormEnum.FIRST_NAME]: ['', [Validators.required]],
        [SignUpFormEnum.LAST_NAME]: ['', [Validators.required]],
        [SignUpFormEnum.EMAIL]: ['', [Validators.required, Validators.email]],
        [SignUpFormEnum.PASSWORD]: ['', [Validators.required, Validators.minLength(8)]],
        [SignUpFormEnum.REPEAT_PASSWORD]: ['', [Validators.required, Validators.minLength(8)]],
    });

    public headerModel: AmphoraHeaderModel;
    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;
    public emailInputModel: AmphoraInputFieldModel;
    public firstNameInputModel: AmphoraInputFieldModel;
    public lastNameInputModel: AmphoraInputFieldModel;
    public passwordInputModel: AmphoraInputFieldModel;
    public repeatPasswordInputModel: AmphoraInputFieldModel;
    public checkEmailPopUpModel: AmphoraCommonPopUpModel;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private navController: NavController,
                private popUpService: PopUpService,
                private store$: Store) { }

    public ngOnInit(): void {
        this.authService.setPageType(AuthEnum.SIGN_UP);
        this.createModels();
        this.initForm();
    }

    private createModels(): void {
        this.headerModel = this.authService.createHeader();
        this.titleSectionModel = this.authService.createRegularSection();
        this.formSectionModel = this.authService.createOrnamentedSection();
        this.checkEmailPopUpModel = this.popUpService.createCheckYourEmailPopUp({
            resendOnClick: this.onCheckYourEmailPopUpResendLetterClick.bind(this),
            okOnClick: this.onCheckYourEmailPopUpOKClick.bind(this),
        });
        this.submitSectionModel = this.authService.createRegularSection();
        this.submitButtonModel = this.authService.createSubmitButton();

        this.firstNameInputModel = this.authService.createTextInputField(
            this.store$.select(SignUpSelectors.selectFirstName),
            'First Name',
            this.onInput(SignUpFormEnum.FIRST_NAME).bind(this),
        );

        this.lastNameInputModel = this.authService.createTextInputField(
            this.store$.select(SignUpSelectors.selectLastName),
            'Last Name',
            this.onInput(SignUpFormEnum.LAST_NAME).bind(this),
        );

        this.emailInputModel = this.authService.createEmailInputField(
            this.store$.select(SignUpSelectors.selectEmail),
            'Email',
            this.onInput(SignUpFormEnum.EMAIL).bind(this)
        );

        this.passwordInputModel = this.authService.createPasswordInputField(
            this.store$.select(SignUpSelectors.selectPassword),
            'Password',
            this.onInput(SignUpFormEnum.PASSWORD).bind(this)
        );

        this.repeatPasswordInputModel = this.authService.createPasswordInputField(
            this.store$.select(SignUpSelectors.selectRepeatPassword),
            'Repeat Password',
            this.onInput(SignUpFormEnum.REPEAT_PASSWORD).bind(this)
        );
    }

    private initForm(): void {
        this.store$.select(SignUpSelectors.selectForm).pipe(
            take(1),
        ).subscribe((formValue) => {
            this.signUpForm.patchValue(formValue);
        });
    }

    private onInput(field: SignUpFormEnum): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.signUpForm.controls[field].setValue(value);
            model.valid = this.signUpForm.controls[field].valid;

            this.store$.dispatch(SignUpActions.input({value: this.signUpForm.controls[field].value, field}));
        };
    }

    private onCheckYourEmailPopUpResendLetterClick(): void {
        this.store$.dispatch(SignUpActions.submit());
    }

    private onCheckYourEmailPopUpOKClick(): void {
        this.store$.dispatch(SignUpActions.clear());
        this.popUpService.hidePopUp();
        this.navController.navigateRoot(RoutesEnum.VERIFICATION);
    }
}
