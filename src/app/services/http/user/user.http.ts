import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {ILoadUserResponseDto} from './user.dto';

@Injectable({
    providedIn: 'root',
})
export class UserHttp {
    constructor(private http: HttpClient) {
    }

    public loadUserInfo(): Observable<ILoadUserResponseDto> {
        return this.http.get<ILoadUserResponseDto>(HTTP_ROUTING.user.loadUser);
    }
}
