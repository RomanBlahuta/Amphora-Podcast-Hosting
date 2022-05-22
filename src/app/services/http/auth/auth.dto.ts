export interface SignInRequestDTO {
    username: string;
    password: string;
}

export enum SignInRequestFormDataEnum {
    USERNAME = 'username',
    PASSWORD = 'password',
}

export interface SignInResponseDTO {
    access_token: string;
    token_type: string;
}
