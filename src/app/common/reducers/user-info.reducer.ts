import { Reducer, Action } from '@ngrx/store';
import { UserInfo } from './../models/user-info.model';

import {
  LOG_IN,
  LOG_OUT,
  UPDATE_USER_NAME,
  UPDATE_USER_EMAIL
} from './../app-action';

export const userInfoReducer: any = (state: UserInfo, action: Action) => {

  switch(action.type) {
    case LOG_IN:
      return Object.assign(state);

    case LOG_OUT:
      return Object.assign(state);

    case UPDATE_USER_NAME:
      state.name = action.payload;
      return Object.assign(state);

    case UPDATE_USER_EMAIL:
        state.email = action.payload;
        return Object.assign(state);

    default:
      return state;
  }
}