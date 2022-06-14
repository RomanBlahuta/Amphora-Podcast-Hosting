import {Observable} from 'rxjs';

export class AmphoraUploadImageModel {
    public imgSrcController$: Observable<string>;
    public onInput: (file: File, url: string, fileName: string) => void;

    constructor(imgSrcController$: Observable<string>, onInput: (file: File, url: string, fileName: string) => void) {
        this.imgSrcController$ = imgSrcController$;
        this.onInput = onInput;
    }

    public static create(
        imgSrcController$: Observable<string>, onInput: (file: File, url: string, fileName: string) => void): AmphoraUploadImageModel {
        return new AmphoraUploadImageModel(imgSrcController$, onInput);
    }
}
