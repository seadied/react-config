import React, {useState, useEffect} from 'react';


import { Layout, Menu, Breadcrumb } from 'antd';
const {Header} = Layout

const Headerr = (props) => {
    const {title} = props,
    [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
    })
    return (
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Headerr