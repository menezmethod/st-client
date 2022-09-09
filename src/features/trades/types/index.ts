import {BaseEntity} from '@/types';

export type Trade = {
    id: string;
    comments: string;
    createdBy: string;
    direction: 'LONG' | 'SHORT';
    entryPrice: number;
    exitPrice: number;
    instrument: string;
    market: 'CRYPTO' | 'STOCKS';
    outcome: 'WIN' | 'LOSS';
    quantity: number;
    stopLoss: number;
    strategy: string;
    rakeProfit: number;
    timeClosed: Date
    timeExecuted: Date
} & BaseEntity;
