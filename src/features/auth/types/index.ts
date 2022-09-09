export type AuthUser = {
    id: string;
    email: string;
    fullName: string;
    role: 'ADMIN' | 'USER';
    timeRegistered: Date;
};

export type UserResponse = {
    accessToken: string;
    user: AuthUser;
};
