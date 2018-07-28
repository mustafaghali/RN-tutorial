import  {UPDATE_EMAIL_INPUT,RESET_LOGIN_FORM} from './types';

export const updateEmailInput = (text) => {
    return {
             type : UPDATE_EMAIL_INPUT,
             payload: text 
           };
} ;

export const ResetLoginForm = (text) => {
    return {
              type : RESET_LOGIN_FORM,
           };
} ;