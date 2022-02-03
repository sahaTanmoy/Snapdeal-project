import axios from "axios";
import { FETCH_CART_PRODUCT_DETAILS_REQUEST, FETCH_CART_PRODUCT_DETAILS_SUCCESS,FETCH_CART_PRODUCT_DETAILS_FAILURE, REMOVE_CART_PRODUCT_DETAILS } from "./cartProductDetailsTypes"

export const selectedCartProductRequest=()=>{
    return{
        type: FETCH_CART_PRODUCT_DETAILS_REQUEST
    }
}

export const selectedCartProductSuccess=(cartproduct)=>{
    return{
        type: FETCH_CART_PRODUCT_DETAILS_SUCCESS,
        payload: cartproduct
    }
}

export const selectedCartProductFailure=(error)=>{
    return{
        type: FETCH_CART_PRODUCT_DETAILS_FAILURE,
        payload: error
    }
}

export const removeSelectedCartProduct=()=>{
    return{
        type: REMOVE_CART_PRODUCT_DETAILS
        // payload: cartproduct
    }
}

export const fetchCartProductDetails=(id)=>{
    console.log("Data fetching",id)
    return (dispatch)=>{
        dispatch(selectedCartProductRequest())
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response6=>{
            const productdetails1= response6.data
            console.log(99999,productdetails1);
            dispatch(selectedCartProductSuccess(productdetails1))
            // return (productdetails)
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
        })
    }
}