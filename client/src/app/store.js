
//*........................Redux Store...............................//
// A store holds the whole state tree of your application. The only way to change the state 
// inside it is to dispatch an action on it.
// Redux Thunk is a middleware that lets you call action creators that return a function 
// instead of an action object. That function receives the store's dispatch method,
// which is then used to dispatch regular synchronous actions inside the function's 
// body once the asynchronous operations have been completed

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const middleware = [thunk];

//redux store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
