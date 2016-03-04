import React, { Component } from 'react';
import { createHistory } from 'history'
import { login } from './actions/authenticate';
import logo from '../public/images/logo.png';

class Login extends Component {

	constructor(props){
		super(props);
	}
	componentDidMount() {
		// TODO: transition to main app after successful login
		// setTimeout(() => history.replaceState(null, '/app'), 1000);
		FB.getLoginStatus( response => {
			if(response.status == 'connected'){
				login(response.authResponse.accessToken);
				this.props.history.replaceState(null, '/app');
			}
		})
	}

	render() {
		return (

			<div className="wrapper">
				<div className="standby">
					<img src={logo} />
					<h2>GiftHunt</h2>
					<div className="fb-login-button" dataMaxRows="1" dataSize="medium" dataShowFaces="false" dataAutoLogoutLink="true"></div>
				</div>
			</div>
		);
	}
}

export default Login;
