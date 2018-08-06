import {combineReducers} from 'redux';
import LoginPageReducer from './LoginPageReducer';
import AppStateReducer from './AppStateReducer';
import UserInfoReducer from './UserInfoReducer';

export default combineReducers({
    LoginPageState : LoginPageReducer,
    AppState : AppStateReducer,
    UserInfo: UserInfoReducer
});