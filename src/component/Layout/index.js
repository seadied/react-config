import React from 'react';

import Header from '../Header/index.js'
import Sider from '../Sider/index.js'

import { Layout} from 'antd';
import { RouterView } from '../../router/Routerview.js';
const { Content } = Layout;

const Lay = (props) => {
    return (
        <Layout>
          <Header />
          <Layout>
            <Sider />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <RouterView routes={props.routes} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
}

export default Lay