import {
  REMOVE_SERVICE,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_SERVICES_REQUEST
} from '../actions/actionTypes';

const initialState = {
  items: [], loading: false, error: null
};


export default function serviceListReducer(state=initialState, action) {
  switch(action.type) {
    case FETCH_SERVICES_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_SERVICES_FAILURE:
      const {error} = action.payload;
      return {...state, loading: false, error};
    case FETCH_SERVICES_SUCCESS:
      const {items} = action.payload;
      return {...state, items, loading: false, error: null};
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return {...state, items: state.items.filter(service => service.id !== id)};
    default:
      return state;
  }
}