import {Trade} from '@/features/trades/routes/Trade';
import {Trades} from '@/features/trades/routes/Trades';
import {Journal} from '@/features/journals/routes/Journal';
import {Journals} from '@/features/journals/routes/Journals';
import {Profile} from '@/features/users';
import {lazyImport} from '@/utils/lazyImport';
import { Navigate, Outlet } from 'react-router-dom';
import {MainLayout} from "@/components/Layout/MainLayout";
import { Suspense } from 'react';
import {Spinner} from "@/components/Elements/Spinner";

const {Dashboard} = lazyImport({factory: () => import('@/features/misc'), name: 'Dashboard'});
const {Users} = lazyImport({factory: () => import('@/features/users'), name: 'Users'});

const App = () => {
    return (
        <MainLayout>
            <Suspense
                fallback={
                    <div className="h-full w-full flex items-center justify-center">
                        <Spinner />
                    </div>
                }
            >
                <Outlet />
            </Suspense>
        </MainLayout>
    );
};

export const protectedRoutes = [
    {
        path: '/',
        element: <App/>,
        children: [
            // Journals, trades & users
            {path: '/journal', element: <Journal/>},
            {path: '/journals', element: <Journals/>},
            {path: '/profile', element: <Profile/>},
            {path: '/trade/:id', element: <Trade/>},
            {path: '/trades', element: <Trades/>},
            {path: '/users', element: <Users/>},
            // Dashboard
            {path: '*', element: <Navigate to="."/>},
            {path: '/', element: <Dashboard/>},
        ],
    },
];
