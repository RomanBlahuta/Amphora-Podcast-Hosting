// SIGN IN

export interface ISignInRequestDTO {
    username: string;
    password: string;
}

export enum ISignInRequestFormDataEnum {
    USERNAME = 'username',
    PASSWORD = 'password',
}

export interface ISignInResponseDTO {
    access_token: string;
    token_type: string;
}

// SIGN UP

export interface ISignUpRequestDTO {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface ISignUpResponseDTO {
    id: string;
    email: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
    first_name: string;
    last_name: string;
}

// FORGOT PASSWORD

export interface IForgotPasswordRequestDTO {
    email: string;
}

export interface IForgotPasswordResponseDTO {
}

// RESET PASSWORD

export interface IResetPasswordRequestDTO {
    token: string;
    password: string;
}

export interface IResetPasswordResponseDTO {
}

// VERIFIACTION

export interface IRequestVerificationRequestDTO {
    email: string;
}

export interface IRequestVerificationResponseDTO {
}

export interface IVerificationRequestDTO {
    token: string;
}

export interface IVerificationResponseDTO {
}
