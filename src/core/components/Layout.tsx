import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout as AntdLayout } from 'antd';
import { MainMenu } from './MainMenu';

const { Header, Sider, Content } = AntdLayout;

const contentStyle = {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
}

export const Layout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <AntdLayout>
            {/*<Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>*/}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/*<div className="logo" />*/}
                <MainMenu />
            </Sider>

            <AntdLayout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={contentStyle}
                >
                    <Outlet />
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
}