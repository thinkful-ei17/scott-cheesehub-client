import { API_BASE_URL } from '../config';
import { fetchCheesesSuccess, fetchCheesesError} from './cheese';

export const NEW_CHEESE_REQUEST = 'NEW_CHEESE_REQUEST';
export const newCheeseRequest= (newCheese) => ({
  type: NEW_CHEESE_REQUEST,
  newCheese
});

const cheeseQuery = newCheese => {
  const query = {
    method: 'POST', 
    body: JSON.stringify({newCheese}),
    headers: new Headers({'Content-Type': 'application/json'})
  }; 
  return fetch(`${API_BASE_URL}/cheeses`, query);
};

export const postCheese = newCheese => dispatch => {
  dispatch(newCheeseRequest());
  return cheeseQuery(newCheese)
  .then(res => {
    if(!res.ok){
      return Promise.reject('Something Went Wrong');
    }
    return res.json();
  })
  .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
  .catch(err => dispatch(fetchCheesesError(err)));
};
