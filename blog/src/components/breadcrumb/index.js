import React, { Component } from 'react';
import { Link, withRouter }from 'react-router-dom';
import { Breadcrumb } from 'antd';
import {forEach} from 'lodash';

import './index.scss';
import MenuConfig from "../navbar/menu";

class NewBreadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state={
            extraBreadcrumbItems: null,
        }
    }

    getPath = () => {
        //对路径进行切分，存放到this.state.pathSnippets中
        const pathSnippets = this.props.history.location.pathname.split('/').filter(i => i);

        // let arr=this.state.pathSnippets;
        // let pathname=this.context.router.history.location.pathname;
        //将切分的路径读出来，形成面包屑，存放到this.state.extraBreadcrumbItems
        this.state.extraBreadcrumbItems = pathSnippets.map((_, index) => {
            let url = `/${pathSnippets.join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>
                        {this.getTitleOfPath(url)}
                    </Link>
                </Breadcrumb.Item>
            );
        });
    }
		// 根据路由获取当前菜单name
		getTitleOfPath(url) {
			let currentDomainName = "";
			forEach(MenuConfig, (menu) => {
				if (menu.key === url) {
					currentDomainName = menu.title;
				}
			});
			return currentDomainName;
		}
		componentWillUpdate() {
        this.getPath();
    }
    render() {
        return <Breadcrumb className="breadcrumb-content">{this.state.extraBreadcrumbItems}</Breadcrumb>;
    }
}
export default withRouter(NewBreadcrumb);
