import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REST_LOGIN_PAGE} from '../actions/types'

INITAIL_STATE = {
    email:'',
    password:'',
}


export default LoginPageReducer = (state = INITAIL_STATE,action)=>
{
    switch (action.type){
        case EMAIL_CHANGED :
          return {...state,email:action.payload};
        case PASSWORD_CHANGED : 
        return {...state,password:action.payload};
        case REST_LOGIN_PAGE:
        return INITAIL_STATE
        default :
            return state;
    }
    
  

}