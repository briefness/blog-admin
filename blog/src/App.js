import React, { Component } from 'react';
import { Layout } from "antd";
import NavLeft from "./components/navbar/index";
import HeaderBar from "./components/header/index";
import Breadcrumb from "./components/breadcrumb/index";
import './App.scss';
const {
  Header, Sider, Content,
} = Layout;
class App extends Component {

  render() {
    return (
      <Layout className="wrapper">
        <Sider id="nav"><NavLeft/></Sider>
        <Layout>
          <Header className="bgwh header-line-height"><HeaderBar/></Header>
          <Breadcrumb/>
          <Content className="wrapper-main">
            <div className="bgwh">{this.props.children}</div>
          </Content>
        </Layout>

      </Layout>
    );
  }
}

export default App;
