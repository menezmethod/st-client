import { Navigate, Route, Routes } from 'react-router-dom';

import { Trade } from './Trade';

export const TradeRoute = () => {
  return (
    <Routes>
      <Route path=":tradeId" element={<Trade />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
