import {Observable} from 'rxjs';

export class AmphoraUploadImageModel {
    public imgSrcController$: Observable<File>;
    public onInput: () => void;

    constructor(imgSrcController$: Observable<File>, onInput: () => void) {
        this.imgSrcController$ = imgSrcController$;
        this.onInput = onInput;
    }

    public static create(imgSrcController$: Observable<File>, onInput: () => void): AmphoraUploadImageModel {
        return new AmphoraUploadImageModel(imgSrcController$, onInput);
    }
}
