import {Observable} from 'rxjs';
import {InputFieldTypesEnum} from '../../../shared/enums/component-types/input-field-types.enum';

export interface IOptional {
    inputType?: InputFieldTypesEnum;
    onInputListener?: (value: string, inputModel: AmphoraInputFieldModel) => void;
    placeholder?: string;
}

export class AmphoraInputFieldModel {
    public value$: Observable<string>;
    public optional: IOptional;
    public valid: boolean;
    public disabled: boolean;

    constructor(value$: Observable<string>, optional?: IOptional) {
        this.value$ = value$;
        this.valid = true;
        this.disabled = false;

        this.optional = {
            onInputListener: optional?.onInputListener || undefined,
            inputType: optional?.inputType || InputFieldTypesEnum.TEXT,
            placeholder: optional?.placeholder || '',
        };
    }

    public static create(value$: Observable<string>, optional?: IOptional): AmphoraInputFieldModel {
        return new AmphoraInputFieldModel(value$, optional);
    }
}
