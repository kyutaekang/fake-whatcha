import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../app-store';
import { UserInfo } from '../models/user-info.model';

import { LOG_IN, LOG_OUT, UPDATE_USER_NAME, UPDATE_USER_EMAIL } from './../app-action';

@Injectable()
export class UserInfoAction {
    constructor(private store: Store<AppStore>) {

    }

    login(payload: UserInfo) {
        this.store.dispatch({
            type: LOG_IN,
            payload: payload
        });
    }

    logout(payload: UserInfo) {
        this.store.dispatch({
            type: LOG_OUT,
            payload: payload
        });
    }

    updateUserName(payload: UserInfo) {
        this.store.dispatch({
            type: UPDATE_USER_NAME,
            payload: payload
        });
    }

    updateUserEmail(payload: UserInfo) {
        this.store.dispatch({
            type: UPDATE_USER_EMAIL,
            payload: payload
        });
    }
}