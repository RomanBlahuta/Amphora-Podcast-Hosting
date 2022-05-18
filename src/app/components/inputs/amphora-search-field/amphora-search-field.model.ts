import {Observable} from 'rxjs';

export interface IOptional {
    onInputListener?: (value: string, inputModel: AmphoraSearchFieldModel) => void;
    placeholder?: string;
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
        };
    }

    public static create(value$: Observable<string>, optional?: IOptional): AmphoraSearchFieldModel {
        return new AmphoraSearchFieldModel(value$, optional);
    }
}
