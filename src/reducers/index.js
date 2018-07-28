import {combineReducers} from 'redux';
import loginReducer from './loginReducer.js';
import AppStateReducer from './AppStateReducer';

export default combineReducers({
    loginForm:loginReducer,
    appState:AppStateReducer
}); 
