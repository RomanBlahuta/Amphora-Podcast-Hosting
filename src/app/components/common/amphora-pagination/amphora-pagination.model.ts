import {Observable} from 'rxjs';

export interface IOptional {
}

export class AmphoraPaginationModel {
    public totalPages: number;
    public currentIndex$: Observable<number>;
    public optional: IOptional;

    constructor(totalPages: number, currentIndex$: Observable<number>, optional?: IOptional) {
        this.totalPages = totalPages;
        this.currentIndex$ = currentIndex$;

        this.optional = {
        };
    }

    public static create(totalPages: number, currentIndex$: Observable<number>, optional?: IOptional): AmphoraPaginationModel {
        return new AmphoraPaginationModel(totalPages, currentIndex$, optional);
    }
}
