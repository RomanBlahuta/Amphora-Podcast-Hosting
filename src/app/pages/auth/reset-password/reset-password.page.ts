import { Component, OnInit } from '@angular/core';
import {ResetPasswordFormEnum} from '../../../shared/enums/forms/auth-forms.enum';
import {FormBuilder, Validators} from '@angular/forms';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AuthEnum} from '../../../shared/enums/auth.enum';
import {take} from 'rxjs/operators';
import {ResetPasswordSelectors} from '../../../store/reset-password/reset-password.selectors';
import {ResetPasswordActions} from '../../../store/reset-password/reset-password.actions';

@Component({
  selector: 'amphora-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
    public signInForm = this.formBuilder.group({
        [ResetPasswordFormEnum.EMAIL]: ['', [Validators.required, Validators.email]],
        [ResetPasswordFormEnum.NEW_PASSWORD]: ['', [Validators.required, Validators.minLength(8)]],
    });

    public headerModel: AmphoraHeaderModel;
    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;
    public emailInputModel: AmphoraInputFieldModel;
    public passwordInputModel: AmphoraInputFieldModel;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private store$: Store) { }

    public ngOnInit(): void {
        this.authService.setPageType(AuthEnum.RESET_PASSWORD);
        this.createModels();
        this.initForm();
    }

    private createModels(): void {
        this.headerModel = this.authService.createHeader();
        this.titleSectionModel = this.authService.createRegularSection();
        this.formSectionModel = this.authService.createOrnamentedSection();
        this.submitSectionModel = this.authService.createRegularSection();
        this.submitButtonModel = this.authService.createSubmitButton();
        this.emailInputModel = this.authService.createEmailInputField(
            this.store$.select(ResetPasswordSelectors.selectEmail),
            'Email',
            this.onInput(ResetPasswordFormEnum.EMAIL).bind(this)
        );
        this.passwordInputModel = this.authService.createPasswordInputField(
            this.store$.select(ResetPasswordSelectors.selectNewPassword),
            'New Password',
            this.onInput(ResetPasswordFormEnum.NEW_PASSWORD).bind(this)
        );
    }

    private initForm(): void {
        this.store$.select(ResetPasswordSelectors.selectForm).pipe(
            take(1),
        ).subscribe((formValue) => {
            this.signInForm.patchValue(formValue);
        });
    }

    private onInput(field: ResetPasswordFormEnum): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.signInForm.controls[field].setValue(value);
            model.valid = this.signInForm.controls[field].valid;

            this.store$.dispatch(ResetPasswordActions.input({value: this.signInForm.controls[field].value, field}));
        };
    }
}
