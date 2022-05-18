import {StreamingIntegrationsEnum} from '../../../shared/enums/streaming-integrations.enum';

export interface IOptional {
    streamingIntegrations?: StreamingIntegrationsEnum[];
    episodes?: number;
    series?: number;
    totalWatchTime?: string;
}

export class AmphoraShowPreviewCardModel {
    public title: string;
    public optional: IOptional;

    constructor(title: string, optional?: IOptional) {
        this.title = title;

        this.optional = {
            streamingIntegrations: optional?.streamingIntegrations || [],
            episodes: optional?.episodes || 0,
            series: optional?.series || 0,
            totalWatchTime: optional?.totalWatchTime || '0s',
        };
    }

    public static create(title: string, optional?: IOptional): AmphoraShowPreviewCardModel {
        return new AmphoraShowPreviewCardModel(title, optional);
    }
}
