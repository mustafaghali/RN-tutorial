import {combineReducers} from 'redux';
import loginReducer from './loginReducer.js';

export default combineReducers({
    loginForm:loginReducer
}); 
