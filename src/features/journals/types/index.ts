import {BaseEntity} from '@/types';

export type Journal = {
    createdAt: Date
    createdBy: string;
    description: string;
    endDate: Date;
    name: any;
    startDate: Date;
} & BaseEntity;
