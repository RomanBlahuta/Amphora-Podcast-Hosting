import {Observable} from 'rxjs';

export interface IOptional {
    onClickBack?: (index: number) => void;
    onClickNumber?: (index: number) => void;
    onClickForward?: (index: number) => void;
}

export class AmphoraPaginationModel {
    public totalPages$: Observable<number>;
    public currentIndex$: Observable<number>;
    public displayedIndexes$: Observable<number[]>;
    public optional: IOptional;

    constructor(totalPages: Observable<number>,
                currentIndex$: Observable<number>,
                displayedIndexes$: Observable<number[]>,
                optional?: IOptional) {
        this.totalPages$ = totalPages;
        this.currentIndex$ = currentIndex$;
        this.displayedIndexes$ = displayedIndexes$;

        this.optional = {
            onClickBack: optional?.onClickBack || undefined,
            onClickNumber: optional?.onClickNumber || undefined,
            onClickForward: optional?.onClickForward || undefined,
        };
    }

    public static create(
        totalPages: Observable<number>,
        currentIndex$: Observable<number>,
        displayedIndexes$: Observable<number[]>,
        optional?: IOptional): AmphoraPaginationModel {
        return new AmphoraPaginationModel(totalPages, currentIndex$, displayedIndexes$, optional);
    }
}
