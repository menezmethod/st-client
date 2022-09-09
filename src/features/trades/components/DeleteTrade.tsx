import React from 'react';
import {useAuth} from '@/lib/auth';

type DeleteTradeProps = {
    id: string; tradeId: string;
};

export const DeleteTrade = ({id, tradeId}: DeleteTradeProps) => {
    const {user} = useAuth();

    return (<div>

    </div>);
};