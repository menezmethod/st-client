import {Navigate, Route, Routes} from 'react-router-dom';

import {Trade} from './Trade';
import {Trades} from './Trades';

export const TradesRoutes = () => {
    return (
        <Routes>
            <Route path="/trade" element={<Trade/>}/>
            <Route path="trades/:tradeId" element={<Trades/>}/>
            <Route path="*" element={<Navigate to="."/>}/>
        </Routes>
    );
};
