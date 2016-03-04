import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendGift } from '../../actions';

class Merchandise extends Component {
  constructor(props){
    super(props);
  }

  send(){
    let { dispatch, history, friends, merchandises } = this.props;
    dispatch(sendGift({
      toUser: friends.active,
      withMerchandise: merchandises.selected.id,
      message: ""
    }));
    history.replaceState(null, '/app/send/merchandises');
  }

  render(){
    let merchandise = this.props.merchandises.selected;
    return (
      <div className='detail-merchandise'>
        <img src={merchandise.imageUrl} />
        <span>{merchandise.name}</span>
        <button onClick={this.send.bind(this)}>Send gift</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Merchandise);
