import axios from "axios"
import { USER_CART_FETCH_REQUEST, USER_CART_FETCH_FAILURE, USER_CART_FETCH_SUCCESS } from './userCartTypes'

export const fetchUserCartRequest=carts=> {
    return {
        type: USER_CART_FETCH_REQUEST
    }
}

export const fetchUserCartSuccess=carts=> {
    return {
        type: USER_CART_FETCH_SUCCESS,
        payload: carts
    }
}

export const fetchUserCartFailure=error=>{
    return {
        type: USER_CART_FETCH_FAILURE,
        payload: error
    }
}

export const fetchUserCart=(userid)=>{
    return (dispatch)=>{
        dispatch(fetchUserCartRequest())
        axios.get(`https://fakestoreapi.com/carts/user/${userid}`)
        .then(response4=>{
            const carts= response4.data
            // console.log(carts);
            dispatch(fetchUserCartSuccess(carts))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg);
            dispatch(fetchUserCartFailure(errorMsg))
        })
    }
}
