import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../utils/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private localStorage: LocalStorageService) {
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If request to backend that needs auth
        // if (isNoAuthRequest(req)) {
        //     return next.handle(req);
        // }

        // const accessToken = this.localStorage.get(TOKEN);
        const accessToken = true;
        if (accessToken) {
            const authRequest = req.clone({
                headers: req.headers.set('Authorization', `${accessToken}`),
            });

            return next.handle(authRequest);
        }

        return next.handle(req);
    }
}
