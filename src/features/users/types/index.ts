import {BaseEntity} from '@/types';

export type User = {
    id?: number;
    fullName?: string;
    email?: string;
    role?: 'ADMIN' | 'USER';
    password?: string;
    timeRegistered?: string;
} & BaseEntity;