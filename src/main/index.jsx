import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class MainApp extends Component {

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(nextValue){
		this.props.pushState(null, `/${nextValue}`);
	}

	invite() {
		alert("Should popup Facebook invite dialog");
	}

	back(){
		let { history, extension } = this.props;
		history.replaceState(null, extension.previousState);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<a className='previous' onClick={this.back.bind(this)}><i className="fa fa-angle-left fa-2x"></i></a>
					<span>{this.props.extension.header}</span>
				</div>
				<div className="main">
					{this.props.children}
				</div>
				<div className="tabbar">
					<div><Link to="/app/send"><i className="fa fa-paper-plane fa-2x"></i></Link></div>
					<div><Link to="/app/receive"><i className="fa fa-gift fa-2x"></i></Link></div>
					<div><Link to="/app/achievements"><i className="fa fa-star fa-2x"></i></Link></div>
					<div onClick={this.invite.bind(this)}><i className="fa fa-facebook-square fa-2x"></i></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(MainApp);
