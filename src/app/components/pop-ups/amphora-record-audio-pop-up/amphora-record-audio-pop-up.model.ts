export class AmphoraRecordAudioPopUpModel {
    public onInput: (file: File, fileUrl: string, fileName: string, duration: number) => void;

    constructor(onInput: (file: File, fileUrl: string, fileName: string, duration: number) => void) {
        this.onInput = onInput;
    }

    public static create(onInput: (file: File, fileUrl: string, fileName: string, duration: number) => void): AmphoraRecordAudioPopUpModel {
        return new AmphoraRecordAudioPopUpModel(onInput);
    }
}
