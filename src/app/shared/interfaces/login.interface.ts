export interface ILoginRequest {
    email: string;
    password: string;
    remember: boolean;
}

export interface IUser {
    uid: string;
    email: string;
    displayName: string | null;
    photoURL: string | null;
    emailVerified: boolean;
}
