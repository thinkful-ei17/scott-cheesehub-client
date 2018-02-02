import React from 'react';
import {connect} from 'react-redux';

import {fetchCheeses} from '../actions/cheese'

export class CheeseList extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  makeList(){
    const list = this.props.cheeses.map((cheese, index) => {
     return(
        <li key={index} className='cheese'>{cheese}</li>
      );
    });
    return list;
  }

  render(){
    return(
      <ul className='cheese-list'>
        {this.makeList()}
      </ul>
    );  
  }   
}

const mapStateToProps = state => ({
    cheeses: state.cheeses
  });

export default connect(mapStateToProps)(CheeseList);
