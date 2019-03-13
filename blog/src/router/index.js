import React, { Component } from 'react';
// import { ReduxRouter } from 'redux-router';
import { Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import App from './../App';
import Login from './../view/login/index';
import Home from './../view/home/index';
import Release from './../view/release/index';
export default class IRouter extends Component{

  render(){
    return (
			<BrowserRouter>
					<Switch>
						<Route path="/login" component={Login} />
            <App>
              <Switch>
    						<PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/release" component={Release} />
    						<Redirect to="/home" />
              </Switch>
            </App>
					</Switch>
			</BrowserRouter>
    );
  }
}
