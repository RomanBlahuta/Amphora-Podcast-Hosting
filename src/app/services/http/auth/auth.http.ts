import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {
    ForgotPasswordRequestDTO, ForgotPasswordResponseDTO, ResetPasswordRequestDTO, ResetPasswordResponseDTO,
    SignInRequestDTO,
    SignInRequestFormDataEnum,
    SignInResponseDTO,
    SignUpRequestDTO,
    SignUpResponseDTO
} from './auth.dto';
import {setFormDataUtil} from '../../../shared/utils/utils';

@Injectable({
    providedIn: 'root',
})
export class AuthHttp {
    constructor(private http: HttpClient) {
    }

    public signIn(request: SignInRequestDTO): Observable<SignInResponseDTO> {
        const formData = setFormDataUtil(SignInRequestFormDataEnum, request);

        return this.http.post<SignInResponseDTO>(HTTP_ROUTING.auth.signIn, formData);
    }

    public signUp(request: SignUpRequestDTO): Observable<SignUpResponseDTO> {
        return this.http.post<SignUpResponseDTO>(HTTP_ROUTING.auth.signUp, request);
    }

    public forgotPassword(request: ForgotPasswordRequestDTO): Observable<ForgotPasswordResponseDTO> {
        return this.http.post(HTTP_ROUTING.auth.forgotPassword, request);
    }

    public resetPassword(request: ResetPasswordRequestDTO): Observable<ResetPasswordResponseDTO> {
        return this.http.post(HTTP_ROUTING.auth.resetPassword, request);
    }
}
