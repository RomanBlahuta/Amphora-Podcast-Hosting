import {Observable} from 'rxjs';

export class AmphoraUploadImageModel {
    public imgSrcController$: Observable<string>;
    public loadUrl: (url: string, fileName: string) => void;
    public loadFile: (file: string) => void;

    constructor(imgSrcController$: Observable<string>, loadUrl: (url: string, fileName: string) => void, loadFile: (file: string) => void) {
        this.imgSrcController$ = imgSrcController$;
        this.loadUrl = loadUrl;
        this.loadFile = loadFile;
    }

    public static create(
        imgSrcController$: Observable<string>, loadUrl: (url: string, fileName: string) => void, loadFile: (file: string) => void
    ): AmphoraUploadImageModel {
        return new AmphoraUploadImageModel(imgSrcController$, loadUrl, loadFile);
    }
}
