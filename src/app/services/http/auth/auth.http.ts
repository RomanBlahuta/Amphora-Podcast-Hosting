import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HTTP_ROUTING} from '../../../shared/utils/http-routing';
import {
    IForgotPasswordRequestDTO,
    IForgotPasswordResponseDTO,
    IResetPasswordRequestDTO,
    IResetPasswordResponseDTO,
    ISignInRequestDTO,
    ISignInRequestFormDataEnum,
    ISignInResponseDTO,
    ISignUpRequestDTO,
    ISignUpResponseDTO,
    IRequestVerificationRequestDTO,
    IRequestVerificationResponseDTO,
    IVerificationRequestDTO,
    IVerificationResponseDTO
} from './auth.dto';
import {setFormDataUtil} from '../../../shared/utils/utils';

@Injectable({
    providedIn: 'root',
})
export class AuthHttp {
    constructor(private http: HttpClient) {
    }

    public signIn(request: ISignInRequestDTO): Observable<ISignInResponseDTO> {
        const formData = setFormDataUtil(ISignInRequestFormDataEnum, request);

        return this.http.post<ISignInResponseDTO>(HTTP_ROUTING.auth.signIn, formData);
    }

    public signUp(request: ISignUpRequestDTO): Observable<ISignUpResponseDTO> {
        return this.http.post<ISignUpResponseDTO>(HTTP_ROUTING.auth.signUp, request);
    }

    public forgotPassword(request: IForgotPasswordRequestDTO): Observable<IForgotPasswordResponseDTO> {
        return this.http.post(HTTP_ROUTING.auth.forgotPassword, request);
    }

    public resetPassword(request: IResetPasswordRequestDTO): Observable<IResetPasswordResponseDTO> {
        return this.http.post(HTTP_ROUTING.auth.resetPassword, request);
    }

    public requestVerificationToken(request: IRequestVerificationRequestDTO): Observable<IRequestVerificationResponseDTO> {
        return this.http.post<IRequestVerificationResponseDTO>(HTTP_ROUTING.auth.requestVerify, request);
    }

    public verify(request: IVerificationRequestDTO): Observable<IVerificationResponseDTO> {
        return this.http.post(HTTP_ROUTING.auth.verify, request);
    }
}
