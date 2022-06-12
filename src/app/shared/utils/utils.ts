import {RoutesEnum} from '../enums/routes.enum';
import {LocalStorageService} from '../../services/utils/local-storage.service';
import {ILoadEpisodesByShowIdResponseItemDto} from '../../services/http/episode/episode.dto';

export function setFormDataUtil(formDataEnum: any, formDataProps: any): FormData {
    const formData = new FormData();

    for (const field in formDataEnum) {
        formData.append(formDataEnum[field], formDataProps[formDataEnum[field]]);
        // console.log(formDataEnum[field], formDataProps[formDataEnum[field]]);
    }

    return formData;
}

export function parseDurationTimeUtil(numberOfSeconds: number): string {
    let seconds = numberOfSeconds;

    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return `${(hours >= 1) ? `${hours}h ` : ''}${(minutes >= 1) ? `${minutes}m ` : ''}${(seconds >= 1) ? `${seconds}s` : ''}`;
}

export function getRootRouteRedirect(): string {
    return LocalStorageService.isTokenSet() ? RoutesEnum.DASHBOARD : RoutesEnum.LANDING;
}

export function episodeComparator(a: ILoadEpisodesByShowIdResponseItemDto, b: ILoadEpisodesByShowIdResponseItemDto): number {
   if (a.season_num === b.season_num) {
       if (a.episode_num === b.episode_num) {
           return 0;
       }
       return (a.episode_num > b.episode_num) ? 1 : -1;
   } else {
       return (a.season_num > b.season_num) ? 1 : -1;
   }
}

export function removeItemFromArray(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
