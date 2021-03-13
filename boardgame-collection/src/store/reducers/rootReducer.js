import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
  firestore: firestoreReducer
});

export default rootReducer;