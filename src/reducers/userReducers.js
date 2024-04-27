import {
    USER_LOGGED_IN,
    USER_LOGGED_IN_SUCCESSFULLY,
    USER_LOGGED_IN_FAILED,

    USER_HOME,
    USER_HOME_SUCCESSFULLY,
    USER_HOME_FAILED
} from '../actions/type';

let initialState = {
    name: "",
    username: "",
    job: "",
    password: ""
}

export default function userReducers(state = initialState, action) {
    switch (action.type) {
    case USER_LOGGED_IN:
        return {...state, }
    case USER_LOGGED_IN_SUCCESSFULLY:
        return {...state, }
    case USER_LOGGED_IN_FAILED:
        return {...state, }

    case USER_HOME:
        return {...state, }
    case USER_HOME_SUCCESSFULLY:
        return {...state, }
    case USER_HOME_FAILED:
        return {...state, }
      default:
        return {...state}
    }
  }