import  {UPDATE_EMAIL_INPUT,RESET_LOGIN_FORM} from '../actions/types';

const INITIAL_STATE = {
    email : 'no@email.com',
    password : '',
    loading : ''
};

export default  (state = INITIAL_STATE,action)=> {

    switch(action.type)
    {
        case UPDATE_EMAIL_INPUT:
              return {...state,email:action.payload};
        case RESET_LOGIN_FORM: 
              return INITIAL_STATE;
        default:
             return INITIAL_STATE;
    }

};