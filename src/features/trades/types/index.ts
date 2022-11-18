import { BaseEntity } from '@/types';

export type Trade = {
  baseInstrument: string;
  comments: string;
  createdAt: Date;
  createdBy: string;
  direction: string;
  entryPrice: string;
  exitPrice: string;
  journal: string;
  market: string;
  outcome: string;
  quantity: string;
  quoteInstrument: string;
  stopLoss: string;
  strategy: string;
  takeProfit: string;
  timeClosed: Date;
  timeExecuted: Date;
} & BaseEntity;
