import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - login
const GoodReceiveDefault = Loadable(lazy(() => import('pages/transactions/GoodsReceive')));


// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <GoodReceiveDefault />
        },
        {
            path: 'goodReceive',
            children: [
                {
                    path: 'default',
                    element: <GoodReceiveDefault />
                }
            ]
        },
    ]
};

export default LoginRoutes;
