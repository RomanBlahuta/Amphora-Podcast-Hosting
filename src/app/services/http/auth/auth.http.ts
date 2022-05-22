import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {SignInRequestDTO, SignInRequestFormDataEnum, SignInResponseDTO} from './auth.dto';
import {setFormDataUtil} from '../../../shared/utils/utils';

@Injectable({
    providedIn: 'root',
})
export class AuthHttp {
    constructor(private http: HttpClient) {
    }

    public signIn(creds: SignInRequestDTO): Observable<SignInResponseDTO> {
        const formData = setFormDataUtil(SignInRequestFormDataEnum, creds);

        return this.http.post<SignInResponseDTO>(HTTP_ROUTING.auth.signIn, formData);
    }
}
