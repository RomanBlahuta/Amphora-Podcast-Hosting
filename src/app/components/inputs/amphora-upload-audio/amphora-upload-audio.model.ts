import {Observable} from 'rxjs';

export class AmphoraUploadAudioModel {
    public audioSrcController$: Observable<string>;
    public onInput: (file: File, url: string, fileName: string) => void;

    constructor(audioSrcController$: Observable<string>, onInput: (file: File, url: string, fileName: string) => void) {
        this.audioSrcController$ = audioSrcController$;
        this.onInput = onInput;
    }

    public static create(audioSrcController$: Observable<string>,
                         onInput: (file: File, url: string, fileName: string) => void): AmphoraUploadAudioModel {
        return new AmphoraUploadAudioModel(audioSrcController$, onInput);
    }
}
