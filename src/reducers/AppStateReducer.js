import {CHANGE_APP_STATE} from '../actions/types'

INITAIL_STATE = {
   AppDrawerVisible:false,
}


export default AppStateReducer = (state = INITAIL_STATE,action)=>
{
    switch (action.type){
        case CHANGE_APP_STATE :
          return {...state,[action.payload.prop]:action.payload.value};
        default :
            return state;
    }
    
  

}