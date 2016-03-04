import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAchievements, fetchAchievement, setPreviousState } from '../../actions';
import relationship from './relationship';

class Achievements extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.dispatch(fetchAchievements());
	}

	loadDetail(friendID){
		let { dispatch, history } = this.props;
		dispatch(fetchAchievement(friendID));
		history.replaceState(null, `/app/achievements/${friendID}`);
		dispatch(setPreviousState('/app/achievements'));
	}

	render() {
		let { friends } = this.props.achievements.list;
		let achievements = friends.map ( item => {
			let avatar = `https://graph.facebook.com/${item.id}/picture?type=square`;
			let symbol = relationship(item.percentage).class;
			return (
				<li key={item.id} onClick={this.loadDetail.bind(this, item.id)}>
					<a>
						<img className='avatar' src={avatar} />
						<span>{item.name}</span>
						<span className='symbol'><i className={'fa fa-2x ' + symbol}></i></span>
					</a>
				</li>
			);
		});
		return (
			<ul className='achievements'>
				{achievements}
			</ul>
		);
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Achievements);
