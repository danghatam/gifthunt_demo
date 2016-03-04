import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifts, likeGift, dislikeGift } from '../../actions';

class ReceiveGifts extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.dispatch(fetchGifts(this.props.gifts.gifts));
	}

	like(giftID){
		this.props.dispatch(likeGift(giftID));
	}

	dislike(giftID){
		this.props.dispatch(dislikeGift(giftID));
	}

	viewMessage(){

	}

	render() {
		let { gift, merchandise } = this.props.gifts.gifts.length > 0 ? this.props.gifts.gifts[0] : { gift: {}, merchandise: {} };
		return (
			<div className='gift'>
				<div className='detail'>
					<img src={merchandise.imageUrl} />
					<span>{merchandise.name}</span>
				</div>
				<div className='behavior'>
					<div className='reload'><i className="fa fa-history fa-2x"></i></div>
					<div className='like' onClick={this.like.bind(this, gift.id)}><i className="fa fa-heart fa-3x"></i></div>
					<div className='dislike' onClick={this.dislike.bind(this, gift.id)}><i className="fa fa-times-circle fa-3x"></i></div>
					<div className='message' onClick={this.viewMessage}><i className="fa fa-envelope-o fa-2x"></i></div>
				</div>
			</div>
		);
	}
}


const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(ReceiveGifts);
