import React from 'react';
import {connect} from 'react-redux';
import {postCheese} from '../actions/cheese-post';


export class CheeseForm extends React.Component{

  onSubmit(event){
    event.preventDefault();
    this.props.dispatch(postCheese(this.input.value));
    this.input.value = '';
  }

  render(){

    return (

      <form id='cheeseForm' onSubmit={e => this.onSubmit(e)}>
        <h1>Cheese List</h1>
        <label forhtml='addCheese' className='addCheese'>Add a Cheese</label>
        <input 
          type='text' 
          placeholder='add a cheese'
          ref={input => (this.input = input)} 
        />
        <button>Submit</button>
      </form>

  )}
}

export default connect()(CheeseForm);