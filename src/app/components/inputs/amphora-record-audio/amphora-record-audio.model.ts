import {Observable} from 'rxjs';

export class AmphoraRecordAudioModel {
    public audioSrcController$: Observable<string>;
    public onInput: (file: File, url: string, fileName: string) => void;
    constructor(audioSrcController$: Observable<string>,
                onInput: (file: File, url: string, fileName: string) => void) {
        this.audioSrcController$ = audioSrcController$;
        this.onInput = onInput;
    }

    public static create(audioSrcController$: Observable<string>,
                         onInput: (file: File, url: string, fileName: string) => void): AmphoraRecordAudioModel {
        return new AmphoraRecordAudioModel(audioSrcController$, onInput);
    }
}
