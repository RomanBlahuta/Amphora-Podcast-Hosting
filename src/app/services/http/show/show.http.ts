import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {
    ICreateShowRequestFormDataEnum,
    ICreateShowRequestFormDTO,
    ILoadPaginatedShowsResponseDTO,
    ILoadShowResponseDTO
} from './show.dto';
import {SHOW_PAGE_SIZE} from '../../../shared/utils/constants';
import {setFormDataUtil} from '../../../shared/utils/utils';

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

    public getShow(id: string): Observable<ILoadShowResponseDTO> {
        return this.http.get<ILoadShowResponseDTO>(HTTP_ROUTING.show.loadShow + '/' + id);
    }

    public createShow(data: ICreateShowRequestFormDTO, imageTitle: string): Observable<any> {
        const formData = setFormDataUtil(ICreateShowRequestFormDataEnum, data);
        return this.http.post<any>(`${HTTP_ROUTING.show.create}?image_title=${imageTitle}`, formData);
    }
}
