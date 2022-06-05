// In Redux, a reducer is a pure function that takes an action and the previous state of
// the application and returns the new state. The action describes what happened and it 
// is the reducer's job to return the new state based on that action.
import {
    GET_USER,
    GET_USER_ERROR
   } from '../actions/types';
   
   const initialState = {
     user: null,
     users: [],
     loading: true,
     error: {},
   };
   
   //user reducer Type cases:
   export default function userReducer (state = initialState, action) {

     const { type, payload } = action;
   
     switch (type) {
       
     case GET_USER:
       return {
         ...state,
         user: payload,
         loading: false,
       };

     case GET_USER_ERROR:
       return {
         ...state,
         error: payload,
         loading: false,
         
       };
     
       default:
         return state;
     }
   }