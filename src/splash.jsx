import React, { Component } from 'react';
import logo from '../public/images/logo.png';
class Splash extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		// TODO: check login status and redirect appropriately
		// if already login, redirect to app
		// else redirect to login
		setTimeout(() => this.props.history.pushState(null, '/login'), 1000);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="standby">
					<img src={logo} />
					<h2>GiftHunt</h2>
				</div>
			</div>
		);
	}
}

export default Splash;
