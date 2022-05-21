export interface IOptional {
}

export class AmphoraAudioPlayerModel {
    public src: string;
    public optional: IOptional;

    constructor(src: string, optional?: IOptional) {
        this.src = src;
        this.optional = {
        };
    }

    public static create(src: string, optional?: IOptional): AmphoraAudioPlayerModel {
        return new AmphoraAudioPlayerModel(src, optional);
    }
}
