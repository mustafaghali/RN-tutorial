// action types
export const CHANGE_MAIL = 'change_mail';
export const UPDATE_FORM_PROP = 'UPDATE_FORM_PROP';
export const FEATCH_ALL_USERS = 'FEATCH_ALL_USERS';
export const FEATCH_ALL_USERS_SUCCESS = 'FEATCH_ALL_USERS_SUCCESS';
export const FEATCH_ALL_USERS_ERROR = 'FEATCH_ALL_USERS_ERROR';

// action creators

export const changeEmail = (email) => {

    return {
        type: CHANGE_MAIL,
        payload: email
    }
}


export const loginFormUpdate = (key, value) => {
    debugger;
    return {
        type: UPDATE_FORM_PROP,
        payload: { key, value }
    }
}

export const featchAllUsers = () => {
    debugger;
    return {
        type: FEATCH_ALL_USERS,
    }
}

export const featchAllUsersSuccess = (res) => {
    debugger;
    return {
        type: FEATCH_ALL_USERS_SUCCESS,
        payload: res
    }
}

export const featchAllUsersError = (error) => {
    debugger;
    return {
        type: FEATCH_ALL_USERS_ERROR,
        payload: error
    }
}
