// assets
import { DashboardOutlined, UsergroupAddOutlined, FieldTimeOutlined, InboxOutlined, HomeOutlined } from '@ant-design/icons';
// icons
const icons = {
    DashboardOutlined,
    UsergroupAddOutlined,
    FieldTimeOutlined,
    InboxOutlined,
    HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Master',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Master',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'Manage User',
            title: 'Manage User',
            type: 'item',
            url: '/user/default',
            icon: icons.UsergroupAddOutlined
        },
        {
            id: 'Product Batch',
            title: 'Product Batch',
            type: 'item',
            icon: icons.FieldTimeOutlined,
            url : '/productType/default'
        },
        {
            id: 'Area',
            title: 'Area/Location',
            type: 'item',
            url: '/location/default',
            icon: icons.HomeOutlined,
           
        }
    ]
};

export default dashboard;
