import {CHANGE_APP_STATE} from './types';


export const  UpdateAppState = ({prop,value}) =>{
    return {
        type:CHANGE_APP_STATE,
        payload: {prop,value}  
    }
}

