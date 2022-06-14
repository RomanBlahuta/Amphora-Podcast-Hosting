import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {ICreateImageResponseDto} from './image.dto';

@Injectable({
    providedIn: 'root',
})
export class ImageHttp {
    constructor(private http: HttpClient) {}

    public createImage(fileName: string, file: File): Observable<ICreateImageResponseDto> {
        const formData = new FormData();
        formData.append('image_file', file);

        return this.http.post<ICreateImageResponseDto>(`${HTTP_ROUTING.image.create}?image_title=${fileName}`, formData);
    }
}
