import {IconsEnum} from '../enums/icons.enum';
import {StreamingIntegrationsEnum} from '../enums/streaming-integrations.enum';

export const STREAMING_BANNER_ICONS: IconsEnum[] = [
    IconsEnum.APPLE_PODCASTS,
    IconsEnum.CIRCLES,
    IconsEnum.SPOTIFY,
    IconsEnum.CIRCLES,
    IconsEnum.YOUTUBE,
    IconsEnum.CIRCLES,
    IconsEnum.GOOGLE_PODCASTS,
    IconsEnum.CIRCLES,
    IconsEnum.POCKET_CASTS,
    IconsEnum.CIRCLES,
    IconsEnum.SOUNDCLOUD,
];

export const STREAMING_LINKS = {
    [StreamingIntegrationsEnum.APPLE_PODCASTS]: 'https://podcastsconnect.apple.com/login',
    [StreamingIntegrationsEnum.YOUTUBE]: 'https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en-GB&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin',
    [StreamingIntegrationsEnum.SPOTIFY]: 'https://podcasters.spotify.com/submit',
    [StreamingIntegrationsEnum.GOOGLE_PODCASTS]: 'https://podcastsmanager.google.com/',
    [StreamingIntegrationsEnum.POCKET_CASTS]: 'https://pocketcasts.com/submit/',
    [StreamingIntegrationsEnum.SOUNDCLOUD]: 'https://soundcloud.com',
};


export const SHOW_PAGE_SIZE = 6;
export const EPISODE_PAGE_SIZE = 2;
export const MAX_PAGINATION_PAGES_PER_VIEW = 5;
export const SERIES_COUNT_LIMIT = 10;
