import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';
class NoFound extends Component {

  render() {
    return (
      <div className="notfound">
			<div className="wrapper">
					<div className="big">页面不见了！</div>
					<div>要不您去首页瞧瞧，点击<NavLink to="/home">返回首页</NavLink>.</div>
			</div>
			</div>
    );
  }
}

export default NoFound;
