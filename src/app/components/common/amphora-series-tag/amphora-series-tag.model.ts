import {Observable} from 'rxjs';

export interface IOptional {
    onClick?: () => void;
    active$?: Observable<boolean>;
    id?: number;
}

export class AmphoraSeriesTagModel {
    public label: string;
    public optional: IOptional;

    constructor(label: string, optional?: IOptional) {
        this.label = label;
        this.optional = {
            onClick: optional?.onClick || undefined,
            active$: optional?.active$ || undefined,
        };
    }

    public static create(label: string, optional: IOptional): AmphoraSeriesTagModel {
        return new AmphoraSeriesTagModel(label, optional);
    }
}
