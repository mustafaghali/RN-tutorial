
import { CHANGE_MAIL, UPDATE_FORM_PROP, FEATCH_ALL_USERS, FEATCH_ALL_USERS_ERROR, FEATCH_ALL_USERS_SUCCESS } from "../actions/login-actions";

let INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: ''
};

export default loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_MAIL:
            alert(action.payload);
            return { ...state, email: action.payload };
        case UPDATE_FORM_PROP:
            alert("key: " + action.payload.key + " value: " + action.payload.value);
            return { ...state, [action.payload.key]: action.payload.value };
        case FEATCH_ALL_USERS:
            return { ...state, loading: true };
        case FEATCH_ALL_USERS_SUCCESS:
            alert(action.payload.length);
            return { ...state, loading: false };
        case FEATCH_ALL_USERS_ERROR:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
}