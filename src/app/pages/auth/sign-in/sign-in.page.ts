import {Component, OnInit} from '@angular/core';
import {AmphoraHeaderModel} from '../../../components/common/amphora-header/amphora-header.model';
import {AmphoraSectionModel} from '../../../components/common/amphora-section/amphora-section.model';
import {AmphoraButtonModel} from '../../../components/common/amphora-button/amphora-button.model';
import {FormBuilder, Validators} from '@angular/forms';
import {SignInFormEnum} from '../../../shared/enums/forms/auth-forms.enum';
import {AmphoraInputFieldModel} from '../../../components/inputs/amphora-input-field/amphora-input-field.model';
import {Store} from '@ngrx/store';
import {SignInActions} from '../../../store/sign-in/sign-in.actions';
import {SignInSelectors} from '../../../store/sign-in/sign-in.selectors';
import {take} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {AuthEnum} from '../../../shared/enums/auth.enum';
import {RoutesEnum} from '../../../shared/enums/routes.enum';

@Component({
  selector: 'amphora-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
    public signInForm = this.formBuilder.group({
        [SignInFormEnum.EMAIL]: ['', [Validators.required, Validators.email]],
        [SignInFormEnum.PASSWORD]: ['', [Validators.required, Validators.minLength(8)]],
    });

    public headerModel: AmphoraHeaderModel;
    public titleSectionModel: AmphoraSectionModel;
    public formSectionModel: AmphoraSectionModel;
    public submitSectionModel: AmphoraSectionModel;
    public submitButtonModel: AmphoraButtonModel;
    public emailInputModel: AmphoraInputFieldModel;
    public passwordInputModel: AmphoraInputFieldModel;

    public RoutesEnum = RoutesEnum;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                private store$: Store) { }

    public ngOnInit(): void {
        this.authService.setPageType(AuthEnum.SIGN_IN);
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
            this.store$.select(SignInSelectors.selectEmail),
            'Email',
            this.onInput(SignInFormEnum.EMAIL).bind(this),
        );
        this.passwordInputModel = this.authService.createPasswordInputField(
            this.store$.select(SignInSelectors.selectPassword),
            'Password',
            this.onInput(SignInFormEnum.PASSWORD).bind(this)
        );
    }

    private initForm(): void {
        this.store$.select(SignInSelectors.selectForm).pipe(
            take(1),
        ).subscribe((formValue) => {
            this.signInForm.patchValue(formValue);
        });
    }

    private onInput(field: SignInFormEnum): (value: string, model: AmphoraInputFieldModel) => void {
        return (value: string, model: AmphoraInputFieldModel) => {
            this.signInForm.controls[field].setValue(value);
            model.valid = this.signInForm.controls[field].valid;

            this.store$.dispatch(SignInActions.input({value: this.signInForm.controls[field].value, field}));
        };
    }

}
