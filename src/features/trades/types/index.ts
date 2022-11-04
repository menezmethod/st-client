import { BaseEntity } from '@/types';

export type Trade = {
  body: string;
  authorId: string;
  journalId: string;
} & BaseEntity;
