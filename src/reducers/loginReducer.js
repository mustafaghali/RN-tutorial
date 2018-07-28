import  {LOGIN_USER,
    RESET_LOGIN_FORM,
    LOGIN_PAGE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
    email : 'no@email.com',
    password : '',
    loading : false
};

export default  (state = INITIAL_STATE,action)=> {

    switch(action.type)
    {
        case LOGIN_PAGE_UPDATE: 
              return {...state,[action.payload.prop] : action.payload.value};
        case LOGIN_USER:
              return {...state,loading:true};
        default:
             return INITIAL_STATE;
    }

};