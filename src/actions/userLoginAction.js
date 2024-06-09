// import {
//     USER_LOGGED_IN,
//     USER_LOGGED_IN_SUCCESSFULLY,
//     USER_LOGGED_IN_FAILED,

//     FETCH_PROFILE,
//     FETCH_PROFILE_SUCCESSFULLY,
//     FETCH_PROFILE_FAILED,

// } from './type';

// import { getDatabase, ref, child, get } from "firebase/database";

// import db  from "../firebase-config"


// import { configureStore } from '@reduxjs/toolkit';
// import reducer from '../reducers/redux';
// const store = configureStore({ reducer });
// export const dispatch = store.dispatch;


// export default function userLoginChanges() {
//     return {
//     }
// }

// export const saveUser = ({ name, username, job, password}) => {
    // dispatch({
    //     firebase.firestore.doc.
    // });
//     return {}

// }

// export const fetchDataFromFirestore = () => {
//         dispatch({ FETCH_PROFILE });

//         const dbRef = ref(getDatabase());
//         get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//                   dispatch({
//                     type: FETCH_PROFILE_SUCCESSFULLY,
//                     payload: snapshot.val()
//                 });
            
//         } else {
//             console.log("No data available");
//             dispatch({ FETCH_PROFILE_FAILED });
//         }
//         }).catch((error) => {
//         console.error(error);
//         dispatch({ FETCH_PROFILE_FAILED });
//         });
// }

// export const fetchProjects = () => async dispatch => {
//     projectsRef.once("value", snapshot => {
//       dispatch({
//         type: 'FETCH_PROJECTS',
//         payload: snapshot.val()
//       });
//     });
//   };


// export const fetchDataFromFirestore = () => {
//     return (dispatch) => {
//       return db
//         .collection('users')
//         // .doc(uid)
//         .onSnapshot((doc) => {
//           dispatch({
//             type: FETCH_PROFILE_SUCCESSFULLY,
//             payload: doc.data()
//         });
//         });
//     };
//   }