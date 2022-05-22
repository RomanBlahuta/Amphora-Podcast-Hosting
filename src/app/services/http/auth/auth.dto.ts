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

// FORGOT PASSWORD

export interface ForgotPasswordRequestDTO {
    email: string;
}

export interface ForgotPasswordResponseDTO {
}

// RESET PASSWORD

export interface ResetPasswordRequestDTO {
    token: string;
    password: string;
}

export interface ResetPasswordResponseDTO {
}

// VERIFIACTION

export interface RequestVerificationRequestDTO {
    email: string;
}

export interface RequestVerificationResponseDTO {
}

export interface VerificationRequestDTO {
    token: string;
}

export interface VerificationResponseDTO {
}
