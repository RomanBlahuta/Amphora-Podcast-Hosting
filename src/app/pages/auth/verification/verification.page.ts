import { Component, OnInit } from '@angular/core';
import {VerificationFormEnum} from '../../../shared/enums/forms/auth-forms.enum';
import {FormBuilder, Validators} from '@angular/forms';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AuthEnum} from '../../../shared/enums/auth.enum';
import {take} from 'rxjs/operators';
import {VerificationActions} from '../../../store/verification/verification.actions';
import {VerificationSelectors} from '../../../store/verification/verification.selectors';
import {AmphoraCommonPopUpModel} from '../../../components/pop-ups/amphora-common-pop-up/amphora-common-pop-up.model';
import {PopUpService} from '../../../services/utils/pop-up.service';
import {NavController} from '@ionic/angular';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
  selector: 'amphora-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {
    public verificationForm = this.formBuilder.group({
        [VerificationFormEnum.VERIFICATION_CODE]: ['', [Validators.required]],
    });

    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;
    public verificationCodeInputModel: AmphoraInputFieldModel;
    public successPopUpModel: AmphoraCommonPopUpModel;

    constructor(private authService: AuthService,
                private popUpService: PopUpService,
                private formBuilder: FormBuilder,
                private navController: NavController,
                private store$: Store) { }

    public ngOnInit(): void {
        this.authService.setPageType(AuthEnum.VERIFICATION);
        this.createModels();
        this.initForm();
    }

    private createModels(): void {
        this.titleSectionModel = this.authService.createRegularSection();
        this.formSectionModel = this.authService.createOrnamentedSection();
        this.submitSectionModel = this.authService.createRegularSection();
        this.submitButtonModel = this.authService.createSubmitButton();
        this.successPopUpModel = this.popUpService.createSuccessPopUp(this.onSuccessPopUpButtonClick.bind(this));

        this.verificationCodeInputModel = this.authService.createTextInputField(
            this.store$.select(VerificationSelectors.selectVerificationCode),
            'Verification Code',
            this.onInput().bind(this),
        );
    }

    private initForm(): void {
        this.store$.select(VerificationSelectors.selectForm).pipe(
            take(1),
        ).subscribe((formValue) => {
            this.verificationForm.patchValue(formValue);
        });
    }

    private onInput(): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.verificationForm.controls[VerificationFormEnum.VERIFICATION_CODE].setValue(value);
            model.valid = this.verificationForm.controls[VerificationFormEnum.VERIFICATION_CODE].valid;

            this.store$.dispatch(VerificationActions.setValidity({valid: this.verificationForm.valid}));
            this.store$.dispatch(VerificationActions.input({
                value: this.verificationForm.controls[VerificationFormEnum.VERIFICATION_CODE].value
            }));
        };
    }

    private onSuccessPopUpButtonClick(): void {
        this.popUpService.hidePopUp();
        this.navController.navigateRoot(RoutesEnum.SIGN_IN);
    }
}
