import React from 'react';
import { ShoppingCartOutlined, BranchesOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { routeMap } from 'core/routeMap';

const menuItems = [{
    key: '/locomotives',
    label: (
        <Link to='/locomotives'>
            <ShoppingCartOutlined />
            <span>Локомотивы</span>
        </Link>
    )
    }, {
        key: '/maps',
        label: (
            <Link to='/maps'>
                <BranchesOutlined />
                <span>Карта</span>
            </Link>
        ),
}];

export const MainMenu: React.FC = () => {

    const location = useLocation();
    const defaultSelectedKey = menuItems.find((menuRoute => location.pathname.indexOf(menuRoute.key) === 0))?.key;
    const defaultSelectedKeys = defaultSelectedKey ? [defaultSelectedKey]: undefined;

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[routeMap.locomotives.list]}
            selectedKeys={defaultSelectedKeys}
            style={{height: "100vh"}}
            items={menuItems}
        />  
    )
};
