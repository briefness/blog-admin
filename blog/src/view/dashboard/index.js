import React, { Component } from 'react';
import Overview from './overview/index.js'
import ArticleOfMonthChart from './articleOfMonth/index.js'
import './index.scss';

class Dashboard extends Component {

  render() {
    return (
			<div className="gutter-example dashboard">
				<Overview/>
				<ArticleOfMonthChart/>
		  </div>
    );
  }
}

export default Dashboard;
