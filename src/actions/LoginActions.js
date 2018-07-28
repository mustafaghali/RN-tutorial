import  {LOGIN_USER,
    RESET_LOGIN_FORM,
    LOGIN_PAGE_UPDATE} from './types';

import axios from 'axios';



export const UpdateLoginPage = ({prop, value}) => {  
    return (
      {
          type : LOGIN_PAGE_UPDATE,
          payload : {prop, value}
      }
   );
}


export const UpdateLoginPageAsync = (dispatch,{prop, value}) => {  
    dispatch
    (
      {
          type : LOGIN_PAGE_UPDATE,
          payload : {prop, value}
      }
   );
}



export const ResetLoginForm = (text) => {
    return {
              type : RESET_LOGIN_FORM,
           };
} ;


export const loginUser = ({email,password}) =>{
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
     UpdateLoginPageAsync(dispatch,{prop:'loading',value:false});
      // always executed
    });

}

}