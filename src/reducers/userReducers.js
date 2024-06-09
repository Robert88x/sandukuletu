import {
    USER_LOGGED_IN,
    USER_LOGGED_IN_SUCCESSFULLY,
    USER_LOGGED_IN_FAILED,

    USER_HOME,
    USER_HOME_SUCCESSFULLY,
    USER_HOME_FAILED,

    FETCH_PROFILE,
    FETCH_PROFILE_SUCCESSFULLY,
    FETCH_PROFILE_FAILED,

} from '../actions/type';

let initialState = {
    value: 0,
    name: "",
    username: "",
    job: "",
    password: "",
    profiles: {}
}

export default function userReducers(state = initialState, action) {
    switch (action.type) {
    case USER_LOGGED_IN:
        return {...state, }
    case USER_LOGGED_IN_SUCCESSFULLY:
        return {...state, name: "Robert", username:"robby", job: "Programmer", password: "DYPO99090PYU", value: state.value + 1}
    case USER_LOGGED_IN_FAILED:
        return {...state, }

    case USER_HOME:
        return {...state, }
    case USER_HOME_SUCCESSFULLY:
        return {...state, }
    case USER_HOME_FAILED:
        return {...state, }

    case FETCH_PROFILE:
    return { 
        profiles: action.payload    //this will update projects array inside store
        }
    case FETCH_PROFILE_SUCCESSFULLY:
      console.log('create profile success');
      console.log(action.profile);
      return state;
    case FETCH_PROFILE_FAILED:
      console.log('create profile error');
      return state;


      default:
        return {...state}
    }
  }