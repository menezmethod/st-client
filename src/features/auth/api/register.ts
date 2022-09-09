import {axios} from '@/lib/axios';

import {UserResponse} from '../types';

export type RegisterCredentialsDTO = {
    email: string;
    password: string;
    fullName: string;
    timeRegistered: Date;
};

export const registerWithEmailAndPassword = (
    data: RegisterCredentialsDTO
): Promise<UserResponse> => {
    return axios.post('/auth/register', data);
};
