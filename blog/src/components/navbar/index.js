
import React from "react";
import { Menu } from "antd";
import { NavLink, withRouter } from "react-router-dom";
import MenuConfig from "./menu";
const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }
  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };
  render() {
    return (
      <div>
				<p className="wh f30 header-line-height text-center">Blog</p>
        <Menu onClick={this.handleClick} theme="dark" selectedKeys={[this.props.history.location.pathname]}>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default withRouter(NavLeft);
