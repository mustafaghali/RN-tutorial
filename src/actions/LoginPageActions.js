

import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REST_LOGIN_PAGE} from './types';


export const  emailChanged = (text) =>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    }
}


export const  passwordChanged = (text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload: text
    }
}

export const  resetLoginPage = () =>{
    return {
        type:REST_LOGIN_PAGE,
    }
}