import React, { Component } from 'react';
import { Avatar, Menu, Dropdown } from 'antd';
import { withRouter } from "react-router-dom";

class HeaderBar extends Component {
  handleMenuClick = (e) => {
    if (e.key === "/login") {
      window.sessionStorage.removeItem("userId");
    }
    this.props.history.push(e.key);
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="/user">
          个人中心
        </Menu.Item>
        <Menu.Item key="/login">
          退出
        </Menu.Item>
      </Menu>
    );
    const userName = window.sessionStorage.getItem("userId");
    return (
			<div className="text-right">
        <Dropdown overlay={menu} trigger={['click']}>
          <span>
            <Avatar
            className="mr6"
            src="https://i.loli.net/2017/08/21/599a521472424.jpg"
            alt={userName} />
            {userName}
          </span>
        </Dropdown>

			</div>
    );
  }
}

export default withRouter(HeaderBar);
