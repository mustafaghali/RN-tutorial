import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REST_LOGIN_PAGE,
    LOGIN_PAGE_STATE_UPDATE,
    LOGIN_USER,
    LOGIN_USER_DONE} from '../actions/types'

INITAIL_STATE = {
    email:'',
    password:'',
    loading:false 
}


export default LoginPageReducer = (state = INITAIL_STATE,action)=>
{
    switch (action.type){
        case EMAIL_CHANGED :
          return {...state,email:action.payload};
        case PASSWORD_CHANGED : 
        return {...state,password:action.payload};
        case LOGIN_PAGE_STATE_UPDATE:
        return {...state,[action.payload.prop]:action.payload.value}
        case LOGIN_USER:
        return {...state,loading:true}
        case LOGIN_USER_DONE:
        return {...state,loading:false}
        case REST_LOGIN_PAGE:
        return INITAIL_STATE
        default :
            return state;
    }
    
  

}