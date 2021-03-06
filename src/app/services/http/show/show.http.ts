import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {
    ICreateShowRequestDTO, ICreateShowResponseDTO, IDeleteShowResponseDTO,
    ILoadPaginatedShowsResponseDTO, ILoadSeriesByShowIdResponseDTO,
    ILoadShowResponseDTO
} from './show.dto';
import {SHOW_PAGE_SIZE} from '../../../shared/utils/constants';

@Injectable({
    providedIn: 'root',
})
export class ShowHttp {
    constructor(private http: HttpClient) {
    }

    public getPaginatedShows(page: number, title: string): Observable<ILoadPaginatedShowsResponseDTO> {
        return this.http.get<ILoadPaginatedShowsResponseDTO>(
            HTTP_ROUTING.show.loadShows + `?page=${page}&size=${SHOW_PAGE_SIZE}` + ((title.length > 0) ? `&show_name=${title}` : ''),
        );
    }

    public getFeaturedShows(): Observable<ILoadPaginatedShowsResponseDTO> {
        return this.http.get<ILoadPaginatedShowsResponseDTO>(`${HTTP_ROUTING.show.loadShow}?featured=true`);
    }

    public getSeriesByShowId(id: string): Observable<ILoadSeriesByShowIdResponseDTO[]> {
        return this.http.get<ILoadSeriesByShowIdResponseDTO[]>(HTTP_ROUTING.series.getByShowId + `/${id}`);
    }

    public getShow(id: string): Observable<ILoadShowResponseDTO> {
        return this.http.get<ILoadShowResponseDTO>(HTTP_ROUTING.show.loadShow + '/' + id);
    }

    public createShow(data: ICreateShowRequestDTO): Observable<ICreateShowResponseDTO> {
        return this.http.post<ICreateShowRequestDTO>(HTTP_ROUTING.show.create, data);
    }

    public updateShow(id: string, data: ICreateShowRequestDTO): Observable<ICreateShowResponseDTO> {
        return this.http.put<ICreateShowRequestDTO>(`${HTTP_ROUTING.show.edit}/${id}`, data);
    }

    public deleteShow(id: string): Observable<IDeleteShowResponseDTO> {
        return this.http.delete<IDeleteShowResponseDTO>(`${HTTP_ROUTING.show.deleteShow}/${id}`);
    }
}
