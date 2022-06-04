import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

export interface IOptional {
    onInputListener?: (value: string, inputModel: AmphoraSearchFieldModel) => void;
    placeholder?: string;
    formControl?: FormControl;
    onDebouncedSearch?: () => void;
}

export class AmphoraSearchFieldModel {
    public value$: Observable<string>;
    public optional: IOptional;
    public disabled: boolean;

    constructor(value$: Observable<string>, optional?: IOptional) {
        this.value$ = value$;
        this.disabled = false;

        this.optional = {
            onInputListener: optional?.onInputListener || undefined,
            placeholder: optional?.placeholder || '',
            formControl: optional?.formControl || new FormControl(''),
            onDebouncedSearch: optional?.onDebouncedSearch || undefined,
        };
    }

    public static create(value$: Observable<string>, optional?: IOptional): AmphoraSearchFieldModel {
        return new AmphoraSearchFieldModel(value$, optional);
    }
}
