import React, {Component} from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: window.sessionStorage.getItem("userId") ? true : false
        }
    }

    componentWillMount() {
        if(!this.state.isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }

    render() {
        let { component: Component, ...rest} = this.props;
        return  this.state.isAuthenticated ?
        (<Route {...rest} render={(props) => ( <Component {...props} />
            )}/> ) : (<Redirect to={{
                   pathname: '/login',
                   state: { from: this.props.location }
                }} />)

    }
}

export default withRouter(PrivateRoute);
