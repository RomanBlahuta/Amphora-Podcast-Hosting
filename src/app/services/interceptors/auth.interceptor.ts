import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../utils/local-storage.service';
import {LocalStorageStateEnum} from '../../shared/enums/local-storage-state.enum';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes(environment.apiBase)) {
            return next.handle(req);
        }

        const accessToken = this.localStorage.get(LocalStorageStateEnum.TOKEN);
        console.log(accessToken);
        if (accessToken) {
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
            });
            console.log('IF');

            return next.handle(authRequest);
        }

        return next.handle(req);
    }
}
