import { Component, OnInit } from '@angular/core';
import {ForgotPasswordFormEnum} from '../../../shared/enums/forms/auth-forms.enum';
import {FormBuilder, Validators} from '@angular/forms';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AuthEnum} from '../../../shared/enums/auth.enum';
import {take} from 'rxjs/operators';
import {ForgotPasswordSelectors} from '../../../store/forgot-password/forgot-password.selectors';
import {ForgotPasswordActions} from '../../../store/forgot-password/forgot-password.actions';
import {AmphoraCommonPopUpModel} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
  selector: 'amphora-reset-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
    public forgotPasswordForm = this.formBuilder.group({
        [ForgotPasswordFormEnum.EMAIL]: ['', [Validators.required, Validators.email]],
    });

    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;
    public emailInputModel: AmphoraInputFieldModel;
    public checkYourEmailPopUpModel: AmphoraCommonPopUpModel;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private popUpService: PopUpService,
                private navController: NavController,
                private store$: Store) { }

    public ngOnInit(): void {
        this.authService.setPageType(AuthEnum.FORGOT_PASSWORD);
        this.createModels();
        this.initForm();
    }

    private createModels(): void {
        this.titleSectionModel = this.authService.createRegularSection();
        this.formSectionModel = this.authService.createOrnamentedSection();
        this.submitSectionModel = this.authService.createRegularSection();
        this.submitButtonModel = this.authService.createSubmitButton();
        this.checkYourEmailPopUpModel = this.popUpService.createCheckYourEmailPopUp({
            resendOnClick: this.onCheckYourEmailPopUpResendLetterClick.bind(this),
            okOnClick: this.onCheckYourEmailPopUpOKClick.bind(this),
        });

        this.emailInputModel = this.authService.createEmailInputField(
            this.store$.select(ForgotPasswordSelectors.selectEmail),
            'Email',
            this.onInput(ForgotPasswordFormEnum.EMAIL).bind(this)
        );
    }

    private initForm(): void {
        this.store$.select(ForgotPasswordSelectors.selectForm).pipe(
            take(1),
        ).subscribe((formValue) => {
            this.forgotPasswordForm.patchValue(formValue);
        });
    }

    private onInput(field: ForgotPasswordFormEnum): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.forgotPasswordForm.controls[field].setValue(value);
            model.valid = this.forgotPasswordForm.controls[field].valid;

            this.store$.dispatch(ForgotPasswordActions.setValidity({valid: this.forgotPasswordForm.valid}));
            this.store$.dispatch(ForgotPasswordActions.input({value: this.forgotPasswordForm.controls[field].value, field}));
        };
    }

    private onCheckYourEmailPopUpResendLetterClick(): void {
        this.store$.dispatch(ForgotPasswordActions.submit());
    }

    private onCheckYourEmailPopUpOKClick(): void {
        this.store$.dispatch(ForgotPasswordActions.clear());
        this.popUpService.hidePopUp();
        this.navController.navigateRoot(RoutesEnum.RESET_PASSWORD);
    }
}
