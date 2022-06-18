import {Observable} from 'rxjs';

export class AmphoraUploadAudioModel {
    public audioSrcController$: Observable<string>;
    public audioFileNameController$: Observable<string>;
    public onInput: (file: File, url: string, fileName: string) => void;

    constructor(audioSrcController$: Observable<string>,
                audioFileNameController$: Observable<string>,
                onInput: (file: File, url: string, fileName: string) => void) {
        this.audioSrcController$ = audioSrcController$;
        this.audioFileNameController$ = audioFileNameController$;
        this.onInput = onInput;
    }

    public static create(audioSrcController$: Observable<string>,
                         audioFileNameController$: Observable<string>,
                         onInput: (file: File, url: string, fileName: string) => void): AmphoraUploadAudioModel {
        return new AmphoraUploadAudioModel(audioSrcController$, audioFileNameController$, onInput);
    }
}
