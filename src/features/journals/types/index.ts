import { BaseEntity } from '@/types';

export type Journal = {
  title: string;
  body: string;
} & BaseEntity;
