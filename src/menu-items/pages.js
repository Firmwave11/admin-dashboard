// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Transaction',
    type: 'group',
    children: [
        {
            id: 'goodReceive',
            title: 'Goods Receive',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        {
            id: 'GoodsIssue',
            title: 'Goods Issue',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        {
            id: 'ReturnGR',
            title: 'Return GR',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        {
            id: 'ReturnGI',
            title: 'Return GI',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        {
            id: 'Service',
            title: 'Product Service',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        {
            id: 'ProductDisposal',
            title: 'Product Disposal',
            type: 'item',
            url: '/goodReceive/default',
            icon: icons.ProfileOutlined
        },
        
    ]
};

export default pages;
