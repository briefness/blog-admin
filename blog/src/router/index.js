import React, { Component } from 'react';
// import { ReduxRouter } from 'redux-router';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import App from './../App';
import Login from './../view/login/index';
import Dashboard from './../view/dashboard/index';
import Home from './../view/home/index';
import Release from './../view/release/index';
import User from './../view/user/index';
import NoFound from './../view/404/index';
export default class IRouter extends Component{

  render(){
    return (
			<BrowserRouter>
					<Switch>
						<Route path="/login" component={Login} />
            <App>
              <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
    						<PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/release" component={Release} />
                <PrivateRoute path="/user" component={User} />
                <PrivateRoute  component={NoFound} />
    						<Redirect to="/dashboard" />
              </Switch>
            </App>
					</Switch>
			</BrowserRouter>
    );
  }
}
