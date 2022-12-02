import React from 'react';
import { ShoppingCartOutlined, BranchesOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

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
    // const defaultSelectedKey = menuRoutes.find((menuRoute => location.pathname.indexOf(menuRoute.path) === 0))?.path;
    // const defaultSelectedKey = '/locomotives';
    // const defaultSelectedKeys = defaultSelectedKey ? [defaultSelectedKey]: undefined;
    const defaultSelectedKeys = ['/locomotives'];

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            style={{height: "100vh"}}
            items={menuItems}
        />  
    )
};
