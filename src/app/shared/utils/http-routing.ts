import {environment} from '../../../environments/environment';

export const HTTP_ROUTING = {
    auth: {
        signIn: `${environment.apiBase}/auth/jwt/login`,
        signOut: `${environment.apiBase}/auth/jwt/logout`,
        signUp: `${environment.apiBase}/auth/register`,
        forgotPassword: `${environment.apiBase}/auth/forgot-password`,
        resetPassword: `${environment.apiBase}/auth/reset-password`,
        verify: `${environment.apiBase}/auth/verify`,
        requestVerify: `${environment.apiBase}/auth/request-verify-token`
    },
    user: {
        loadUser: `${environment.apiBase}/users/me`,
    },
    show: {
        //
    },
    episode: {
        //
    },
};
