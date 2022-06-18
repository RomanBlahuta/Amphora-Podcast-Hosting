import {Observable} from 'rxjs';


export interface IOptional {
    id?: string;
    img?: string;
    audio?: any;
    series?: any;
    onSeriesTagClick?: () => void;
    isSeriesActive$?: Observable<boolean>;
    season?: number;
    episode?: number;
    watchTime?: string;
    description?: string;
    onEdit?: () => void;
    onDelete?: () => void;
}

export class AmphoraEpisodeCardModel {
    public title: string;
    public optional: IOptional;

    constructor(title: string, optional?: IOptional) {
        this.title = title;
        this.optional = {
            id: optional?.id || null,
            img: optional?.img || '../../../../assets/img/episode-img-placeholder.png',
            audio: optional?.audio || undefined,
            series: optional?.series || undefined,
            onSeriesTagClick: optional?.onSeriesTagClick || undefined,
            isSeriesActive$: optional?.isSeriesActive$ || undefined,
            onEdit: optional?.onEdit || undefined,
            onDelete: optional?.onDelete || undefined,
            episode: optional?.episode || 1,
            season: optional?.season || 1,
            watchTime: optional?.watchTime || '0s',
            description: optional?.description || 'No description provided.',
        };
    }

    public static create(title: string, optional?: IOptional): AmphoraEpisodeCardModel {
        return new AmphoraEpisodeCardModel(title, optional);
    }
}
