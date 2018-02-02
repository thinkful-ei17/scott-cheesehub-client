import { POST_CHEESES_REQUEST, POST_CHEESES_SUCCESS, POST_CHEESES_ERROR } from '../actions/cheese-post';


const initialState = {
  cheeses: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_CHEESES_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case POST_CHEESES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        cheeses: action.cheeses
      });
    case POST_CHEESES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        cheeses: null
      });
    default:
      return state
  }
}