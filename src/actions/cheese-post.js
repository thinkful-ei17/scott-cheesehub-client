import { API_BASE_URL } from '../config';

export const POST_CHEESES_REQUEST = 'POST_CHEESES_REQUEST';
export const postCheesesRequest = () => ({
  type: POST_CHEESES_REQUEST

});


export const POST_CHEESES_SUCCESS = 'POST_CHEESES_SUCCESS';
export const postCheesesSuccess = (cheeses) => ({
  type: POST_CHEESES_SUCCESS,
  cheeses
});

export const POST_CHEESES_ERROR = 'post_CHEESES_ERROR';
export const postCheesesError = (error) => ({
  type: POST_CHEESES_ERROR,
  error
});


const sendCheese = cheese => {
  fetch(`${API_BASE_URL}/cheeses`, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(cheese),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
};





export const postCheeses = () => dispatch => {
  dispatch(postCheesesRequest());
  return post(`${API_BASE_URL}/cheeses`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject('Something went wrong')
      }
      return res.json();//this is a promise - it's waiting for the body of the response to come back
    })
    .then(cheeses => {
      dispatch(postCheesesSuccess(cheeses));
    })
    .catch(err => dispatch(postCheesesError(err)));
}