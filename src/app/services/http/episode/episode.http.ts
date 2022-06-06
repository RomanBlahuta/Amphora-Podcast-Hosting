import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {ILoadEpisodesByShowIdResponseDto} from './episode.dto';
import {EPISODE_PAGE_SIZE} from '../../../shared/utils/constants';

@Injectable({
    providedIn: 'root',
})
export class EpisodeHttp {
    constructor(private http: HttpClient) {
    }

    public getEpisodesByShowId(id: string, page: number, title: string, series: string): Observable<ILoadEpisodesByShowIdResponseDto> {
        return this.http.get<ILoadEpisodesByShowIdResponseDto>(
            HTTP_ROUTING.episode.loadEpisodes +
            `?show_id=${id}&page=${page}&size=${EPISODE_PAGE_SIZE}` +
            ((title?.length > 0) ? `&episode_title=${title}` : '') +
            ((series?.length > 0) ? `&series=${series}` : '')
        );
    }
}