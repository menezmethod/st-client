import {Navigate, Route, Routes} from 'react-router-dom';
import {JournalsList} from '../components/JournalsList';
import {Journal} from './Journal';

export const JournalsRoutes = () => {
    return (
        <Routes>
            <Route path="journals" element={<JournalsList/>}/>
            <Route path="journals/:tradeId" element={<Journal/>}/>
            <Route path="*" element={<Navigate to="."/>}/>
        </Routes>
    );
};
