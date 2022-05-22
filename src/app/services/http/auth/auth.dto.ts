// SIGN IN

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

// SIGN UP

export interface SignUpRequestDTO {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface SignUpResponseDTO {
    id: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
    first_name: string;
    last_name: string;
}
