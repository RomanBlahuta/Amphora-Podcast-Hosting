import {Observable} from 'rxjs';

export class AmphoraUploadAudioModel {
    public audioSrcController$: Observable<File>;
    public onInput: () => void;

    constructor(imgSrcController$: Observable<File>, onInput: () => void) {
        this.audioSrcController$ = imgSrcController$;
        this.onInput = onInput;
    }

    public static create(audioSrcController$: Observable<File>, onInput: () => void): AmphoraUploadAudioModel {
        return new AmphoraUploadAudioModel(audioSrcController$, onInput);
    }
}
