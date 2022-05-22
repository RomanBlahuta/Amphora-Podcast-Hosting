export enum SignInFormEnum {
    EMAIL = 'email',
    PASSWORD = 'password',
}

export enum SignUpFormEnum {
    FIRST_NAME = 'first_name',
    LAST_NAME = 'last_name',
    EMAIL = 'email',
    PASSWORD = 'password',
    REPEAT_PASSWORD = 'repeatPassword',
}

export enum ForgotPasswordFormEnum {
    EMAIL = 'email',
}

export enum ResetPasswordFormEnum {
    CODE = 'token',
    NEW_PASSWORD = 'password',
}

export enum VerificationFormEnum {
    VERIFICATION_CODE = 'verificationCode',
}
