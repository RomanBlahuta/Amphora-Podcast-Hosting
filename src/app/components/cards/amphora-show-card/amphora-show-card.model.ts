export interface IOptional {
    image?: string;
    description?: string;
}

export class AmphoraShowCardModel {
    public title: string;
    public optional: IOptional;
    constructor(title: string, optional?: IOptional) {
        this.title = title;
        this.optional = {
            image: optional?.image || '../../../../assets/img/show-img-placeholder.png',
            description: optional?.description || 'No description provided.'
        };
    }

    public static create(title: string, optional?: IOptional): AmphoraShowCardModel {
        return new AmphoraShowCardModel(title, optional);
    }
}
