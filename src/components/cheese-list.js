import React from 'react';

export default function CheeseList(props){
  const list = props.cheeses.map((cheese, index) => {
    return (
      <li key={index} className='cheese'>{cheese}</li>
    );
  });
  return(
    <ul className='cheese-list'>
      {list}
    </ul>
  );   
}