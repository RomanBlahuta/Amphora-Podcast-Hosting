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

@Component({
  selector: 'amphora-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
    public signInForm = this.formBuilder.group({
        [SignUpFormEnum.USERNAME]: ['', [Validators.required]],
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
    public usernameInputModel: AmphoraInputFieldModel;
    public passwordInputModel: AmphoraInputFieldModel;
    public repeatPasswordInputModel: AmphoraInputFieldModel;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
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
        this.submitSectionModel = this.authService.createRegularSection();
        this.submitButtonModel = this.authService.createSubmitButton();

        this.usernameInputModel = this.authService.createTextInputField(
            this.store$.select(SignUpSelectors.selectUsername),
            'User Name',
            this.onInput(SignUpFormEnum.USERNAME).bind(this),
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
            this.signInForm.patchValue(formValue);
        });
    }

    private onInput(field: SignUpFormEnum): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.signInForm.controls[field].setValue(value);
            model.valid = this.signInForm.controls[field].valid;

            this.store$.dispatch(SignUpActions.input({value: this.signInForm.controls[field].value, field}));
        };
    }

}
