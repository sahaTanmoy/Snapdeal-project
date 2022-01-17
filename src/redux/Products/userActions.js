import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUserSuccess =users=> {
    console.log("Data Fetched2");
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure =error=> {
    // console.log("error2");
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers=()=>{
    return (dispatch)=>{
        axios.get('https://fakestoreapi.com/users')
        .then(response=>{
            const users= response.data
            console.log(users);
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg);
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}