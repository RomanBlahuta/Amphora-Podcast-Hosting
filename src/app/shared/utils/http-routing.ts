import {environment} from '../../../environments/environment';

export const HTTP_ROUTING = {
    auth: {
        signIn: `${environment.apiBase}/auth/jwt/login`,
    }
};
