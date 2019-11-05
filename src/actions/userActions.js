import axios from 'axios';

export function loadRegisteredUsers() {
    return(dispatch) => {
        dispatch({type: "LOADING_USERS"});
        return axios.get('registered_users.json')
        .then(response => {const users = response.data;
            if(!localStorage.getItem('users')) {
                localStorage.setItem('users', JSON.stringify(users))
            }
            return (dispatch({type: 'LOAD_REGISTERED_USERS', payload: users}, 
            // console.log(users)
            ))
        })
        .catch(error => console.log(error))
    }
}