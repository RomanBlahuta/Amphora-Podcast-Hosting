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
    series: {
        getByShowId: `${environment.apiBase}/series`
    },
    show: {
        loadShows: `${environment.apiBase}/shows/my`,
        create: `${environment.apiBase}/shows/create`,
        loadShow: `${environment.apiBase}/shows`,
        edit: `${environment.apiBase}/shows`,
        deleteShow: `${environment.apiBase}/shows`,
    },
    episode: {
        create: `${environment.apiBase}/episodes/create`,
        deleteEpisode: `${environment.apiBase}/episodes`,
        loadEpisodes: `${environment.apiBase}/episodes`,
        createAudio: `${environment.apiBase}/episodes/file/upload`,
        createRecordedAudio: `${environment.apiBase}/episodes/file/recorded`,
    },
    image: {
        create: `${environment.apiBase}/images/create`,
    }
};
