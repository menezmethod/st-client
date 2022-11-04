import { BaseEntity } from '@/types';

export type Journal = {
  name: string;
  description: string;
  createdAt: Date;
  startDate: Date;
  endDate: Date;
  createdBy: string;
  usersSubscribed: string[];
} & BaseEntity;
