import React from 'react';
import {connect} from 'react-redux';


export default function CheeseForm(props){

  return (
  <form id='cheese-form' onSubmit={e => {
    e.preventDefault();
    console.log('form was submitted');
  }}>
    <title form='cheese-form'>Cheeses</title>
    <input type='text' placeholder='add a cheese' />
    <button>Submit</button>
  
  
  </form>
  )
}