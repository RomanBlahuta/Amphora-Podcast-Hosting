export class AmphoraRecordAudioPopUpModel {
    public onInput: (file: File, fileUrl: string, fileName: string) => void;

    constructor(onInput: (file: File, fileUrl: string, fileName: string) => void) {
        this.onInput = onInput;
    }

    public static create(onInput: (file: File, fileUrl: string, fileName: string) => void): AmphoraRecordAudioPopUpModel {
        return new AmphoraRecordAudioPopUpModel(onInput);
    }
}
