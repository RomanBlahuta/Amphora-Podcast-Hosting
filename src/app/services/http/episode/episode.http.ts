import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {
    ICreateEpisodeAudioResponseDto,
    ICreateEpisodeRequestDTO,
    ICreateEpisodeResponseDTO,
    IDeleteEpisodeResponseDTO,
    IEditEpisodeRequestDTO, IEditEpisodeResponseDTO,
    ILoadEpisodeByIDResponseDTO,
    ILoadEpisodesByShowIdResponseDto
} from './episode.dto';
import {EPISODE_PAGE_SIZE} from '../../../shared/utils/constants';

@Injectable({
    providedIn: 'root',
})
export class EpisodeHttp {
    constructor(private http: HttpClient) {
    }

    public createEpisode(data: ICreateEpisodeRequestDTO): Observable<ICreateEpisodeResponseDTO> {
        return this.http.post<ICreateEpisodeResponseDTO>(HTTP_ROUTING.episode.create, data);
    }

    public editEpisode(id: string, data: IEditEpisodeRequestDTO): Observable<IEditEpisodeResponseDTO> {
        return this.http.put<IEditEpisodeResponseDTO>(`${HTTP_ROUTING.episode.loadEpisodes}/${id}`, data);
    }

    public getEpisodeById(id: string): Observable<ILoadEpisodeByIDResponseDTO> {
        return this.http.get<ILoadEpisodeByIDResponseDTO>(`${HTTP_ROUTING.episode.loadEpisodes}/${id}`);
    }

    public deleteEpisode(id: string): Observable<IDeleteEpisodeResponseDTO> {
        return this.http.delete<IDeleteEpisodeResponseDTO>(`${HTTP_ROUTING.episode.deleteEpisode}/${id}`);
    }

    public createAudio(file: File, fileName: string): Observable<ICreateEpisodeAudioResponseDto> {
        const formData = new FormData();
        formData.append('episode_file', file);
        return this.http.post<ICreateEpisodeAudioResponseDto>(HTTP_ROUTING.episode.createAudio + `?episode_title=${fileName}`, formData);
    }

    public createRecordedAudio(file: File, fileName: string, duration: number): Observable<ICreateEpisodeAudioResponseDto> {
        const formData = new FormData();
        formData.append('episode_file', file);
        return this.http.post<ICreateEpisodeAudioResponseDto>(
            HTTP_ROUTING.episode.createRecordedAudio + `?episode_title=${fileName}&duration=${duration}`, formData
        );
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
