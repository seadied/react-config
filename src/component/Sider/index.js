import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const { Sider } = Layout;
const { SubMenu } = Menu;

const Siderr = () => {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">关于</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/jenkins">jenkins</Link>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        </Sider>
    )
}

export default Siderr