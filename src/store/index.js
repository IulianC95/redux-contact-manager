import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { counterReducer, authReducer, contactsReducer } from './reducers';
import { thunk } from 'redux-thunk';

const mainReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  contacts: contactsReducer,
});

// recipe:
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
