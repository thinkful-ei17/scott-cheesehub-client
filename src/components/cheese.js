import React from 'react';
import CheeseForm from './cheese-form';
import CheeseList from './cheese-list';


export default function Cheese(props){
  return(
    <div className='cheeseDiv'>
      <CheeseForm />
      <CheeseList />
    </div>
  )

}