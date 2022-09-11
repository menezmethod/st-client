import {lazyImport} from '@/utils/lazyImport';
import {Dashboard} from "@/features/misc";

const {AuthRoutes} = lazyImport({factory: () => import('@/features/auth'), name: 'AuthRoutes'});

export const publicRoutes = [
    {
        path: '/auth/*',
        element: <AuthRoutes/>,
    },

];