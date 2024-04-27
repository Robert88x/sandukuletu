import {
    USER_LOGGED_IN,
    USER_LOGGED_IN_SUCCESSFULLY,
    USER_LOGGED_IN_FAILED,
} from './type';

// export default function userLoginChanges() {
//     return {
//     }
// }

export default function saveUser ({ name, username, job, password}) {
    // return {}
    console.log({ name, username, job, password });
}