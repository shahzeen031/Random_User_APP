//-----------------------User Action File--------------------------------------------//
// Actions are the only source of information for the redux store. the have a type field 
// that tells what kind of action to perform and all other fields contain information or data


import axios from 'axios';
import {GET_USER, GET_USER_ERROR} from './types';

//Fetch the API data and dispatch it to the Get_USER Type
export const getUser = () => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5050/api/user`);
  
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err)
      dispatch({
       type: GET_USER_ERROR,
       payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  