import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, activeFriend, setPreviousState } from '../../actions';

class SendGifts extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.dispatch(fetchFriends());
	}

	selectFriend(friendID, e){
		e.preventDefault();
		let { dispatch, history } = this.props;
		dispatch(activeFriend(friendID));
		history.pushState(null, '/app/send/merchandises');
		dispatch(setPreviousState('/app/send'));
	}

	render() {
		let friends = this.props.friends.list.map ( friend =>
			<li key={friend.id}>
				<a href='#' onClick={this.selectFriend.bind(this, friend.id)}>
					<img className='avatar' src={'https://graph.facebook.com/'+friend.id+'/picture?type=square'} />
					<span>{friend.name}</span>
				</a>
			</li>
		);
		return (
			<ul className='list-friends'>{ friends }</ul>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(SendGifts);
