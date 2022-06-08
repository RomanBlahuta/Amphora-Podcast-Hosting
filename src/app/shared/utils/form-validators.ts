import {AbstractControl} from '@angular/forms';
import {SignUpFormEnum} from '../enums/forms/auth-forms.enum';

export function checkRepeatPasswordMatch(control: AbstractControl): null | {repeatPassword: boolean} {
    if (!control.get(SignUpFormEnum.PASSWORD).value || !control.get(SignUpFormEnum.REPEAT_PASSWORD).value) {
        return null;
    }
    if (control.get(SignUpFormEnum.PASSWORD).value === control.get(SignUpFormEnum.REPEAT_PASSWORD).value) {
        return null;
    } else {
        return {repeatPassword: true};
    }
}
