import { BaseEntity } from '@/types';

export type Journal = {
  name: string;
  description: string;
  createdAt: Date;
  startDate: string;
  endDate: string;
  createdBy: string;
  usersSubscribed: string[];
} & BaseEntity;
