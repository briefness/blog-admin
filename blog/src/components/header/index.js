import React, { Component } from 'react';

class HeaderBar extends Component {
  componentWillMount() {
    console.log(this);
  }
  render() {
    return (
			<div>
				header
			</div>
    );
  }
}

export default HeaderBar;
