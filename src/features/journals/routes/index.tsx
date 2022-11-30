import { Navigate, Route, Routes } from 'react-router-dom';

import { Trade } from '@/features/trades/routes/Trade';

import { Journal } from './Journal';
import { Journals } from './Journals';

export const JournalsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Journals />} />
      <Route path=":journalId" element={<Journal />} />
      <Route path=":journalId/trade/:tradeId" element={<Trade />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};
