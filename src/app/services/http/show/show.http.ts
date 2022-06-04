import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {ILoadPaginatedShowsResponseDTO} from './show.dto';

@Injectable({
    providedIn: 'root',
})
export class ShowHttp {
    constructor(private http: HttpClient) {
    }

    public getPaginatedShows(page: number, title: string): Observable<ILoadPaginatedShowsResponseDTO> {
        return this.http.get<ILoadPaginatedShowsResponseDTO>(
            HTTP_ROUTING.show.loadShows + `?page=${page}&size=10` + ((title.length > 0) ? `&show_name=${title}` : ''),
        );
    }
}
