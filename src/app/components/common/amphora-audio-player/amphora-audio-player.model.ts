export class AmphoraAudioPlayerModel {
    public src: string;

    constructor(src: string) {
        this.src = src;
    }

    public static create(src: string): AmphoraAudioPlayerModel {
        return new AmphoraAudioPlayerModel(src);
    }
}
