import { BaseEntity } from '@/types';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: 'ADMIN' | 'USER';
  bio: string;
} & BaseEntity;
