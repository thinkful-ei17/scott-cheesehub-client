import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions/cheese';
import { NEW_CHEESE_REQUEST } from '../actions/cheese-post';

const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_CHEESES_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case NEW_CHEESE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        newCheese: action.newCheese
      });
    case FETCH_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        cheeses: action.cheeses
      });
    case FETCH_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        cheeses: null
      });  
    default:
      return state    
  }
}