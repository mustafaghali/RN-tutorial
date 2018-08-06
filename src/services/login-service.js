import { Observable } from 'rxjs/Rx';
 

export const loginUser = () => {
    return getUsers().map((res) => {
        debugger;
        return res.response;
    });
}

const getUsers = () => {
    return Observable.ajax({
        method: "GET",
        url: 'https://jsonplaceholder.typicode.com/users',
    });
}
