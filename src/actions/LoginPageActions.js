

import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    REST_LOGIN_PAGE,
    LOGIN_PAGE_STATE_UPDATE,
    LOGIN_USER,
    LOGIN_USER_DONE} from './types';
import axios from 'axios';

export const  emailChanged = (text) =>{
    return {
        type:EMAIL_CHANGED,
        payload: text
    }
}

export const  resetLoginPage = () =>{
    return {
        type:REST_LOGIN_PAGE,
    }
}


export const  passwordChanged = (text) =>{
    return {
        type:PASSWORD_CHANGED,
        payload: text
    }
}






export const loginPageStateUpdate = ({prop,value}) =>{
      return {
          type: LOGIN_PAGE_STATE_UPDATE,
          payload:{prop,value}
      }
}

export const loginPageStateUpdateAsyn = (dipatch,{prop,value}) =>{
    dispatch ({
        type: LOGIN_PAGE_STATE_UPDATE,
        payload:{prop,value}
    })
}




export const loginUser = () =>{
    return (dispatch)=>{
        dispatch ({type : LOGIN_USER} );
       
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
          // handle success
          console.log(response);
         // this.setState({ names :response.data.map((item)=>{return {...item,key:item.title}})}); 
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then( ()=> {  
         // this.setState({ loading:false});
         dispatch ({type : LOGIN_USER_DONE} );
        //  dipatch({type:LOGIN_PAGE_STATE_UPDATE,payload:{prop:'loading',value:false}})
        //  dispatch(loginPageStateUpdate);
        //  loginPageStateUpdateAsyn(dispatch,{prop:'loading',value:false});
          // always executed
        });
    }
}