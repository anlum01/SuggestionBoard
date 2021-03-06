import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.LOGIN:
      return state;
    case types.LOGOUT:
      return initialState.user;
  }
}
