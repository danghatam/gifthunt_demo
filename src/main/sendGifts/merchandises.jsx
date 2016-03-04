import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMerchandises, setMerchandise, setPreviousState } from '../../actions';

class Merchandises extends Component {

  constructor(props){
    super(props);
		this.merchandisesPage = 0;
  }

  componentDidMount(){
    let { dispatch, friends } = this.props;
    dispatch(fetchMerchandises(friends.active, this.merchandisesPage));
  }

  selectMerchandise(merchandise, e){
    e.preventDefault();
    let { dispatch, history } =  this.props;
    history.pushState(null, `/app/send/merchandises/${merchandise.id}`);
    dispatch(setMerchandise(merchandise));
    dispatch(setPreviousState('/app/send/merchandises'));
  }

  render(){
    let merchandises = this.props.merchandises.list.map( merchandise => {
      return (
        <div className='merchandise' key={merchandise.id}>
          <a href='#' onClick={this.selectMerchandise.bind(this, merchandise)}>
            <div className='thumb'><img src={merchandise.imageUrl} /></div>
            <span>{merchandise.name}</span>
          </a>
        </div>
      );
    });
    return(
      <div className='merchandises'>
        <div className='searching'>
          <input type='text' />
        </div>
        { merchandises }
      </div>
    );
  }

}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Merchandises);
