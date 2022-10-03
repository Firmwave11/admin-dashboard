import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const UserDefault = Loadable(lazy(() => import('pages/user')));
const LocationDefault = Loadable(lazy(() => import('pages/location')))
const ProductTypeDefault = Loadable(lazy(()=> import('pages/productType')))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'user',
            children: [
                {
                    path: 'default',
                    element: <UserDefault />
                }
            ]
        },
        {
            path: 'location',
            children: [
                {
                    path: 'default',
                    element: <LocationDefault />
                }
            ]
        },
        {
            path: 'productType',
            children: [
                {
                    path: 'default',
                    element: <ProductTypeDefault />
                }
            ]
        }
    ]
};

export default MainRoutes;
