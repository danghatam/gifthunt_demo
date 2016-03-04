import React, { Component } from 'react';
import { connect } from 'react-redux';
import relationship from './relationship';

class Achievement extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  appreciated(like){
    return like ? "fa-check-circle-o" : "fa-times-circle";
  }

  render(){
    let friend = this.props.achievements.list.friends.filter( friend => friend.id === this.props.params.friendID ).shift();
    let avatar = `https://graph.facebook.com/${friend.id}/picture?type=large`;
    let achievement = this.props.achievements.selected;
    let symbol = relationship(friend.percentage);
    let merchandises = achievement.map( ({gift, merchandise}) => {
      let appre = this.appreciated(gift.like);
      return (
        <div className='item' key={gift.id}>
          <a href={merchandise.url}>
            <div className='thumbnail'><img src={merchandise.imageUrl} /></div>
            <span className='name'>{merchandise.name}</span>
            <span className='confirm'><i className={'fa fa-2x ' + appre}></i></span>
          </a>
        </div>
      )
    });
    return(
      <div className='detail-achievement'>
        <div className='show'>
          <img src={avatar} />
          <div className='info'>
            <span>{friend.name}</span>
            <span><i className={'fa fa-3x ' + symbol.class}></i></span>
            <span>{symbol.text}</span>
          </div>
        </div>
        <div className='history'>
          { merchandises }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Achievement);
