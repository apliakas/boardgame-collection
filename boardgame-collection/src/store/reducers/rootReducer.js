import authReducer from './authReducer';
import gamesReducer from './gamesReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gamesReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;