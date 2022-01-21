import axios from "axios";
import { FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS, FETCH_PRODUCT_DETAILS_FAILURE } from "./productDetailsTypes"

export const selectedProductRequest=()=> {
    return {
        type: FETCH_PRODUCT_DETAILS_REQUEST
    }
}

export const selectedProductSuccess=(product)=>{
    return{
        type: FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: product
    }
}

export const selectedProductFailure=(error)=>{
    return{
        type: FETCH_PRODUCT_DETAILS_FAILURE,
        payload: error
    }
}

export const fetchProductDetails=(id)=>{
    console.log("Data fetching",id)
    return (dispatch)=>{
        dispatch(selectedProductRequest())
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response6=>{
            const productdetails= response6.data
            console.log(9999,productdetails);
            dispatch(selectedProductSuccess(productdetails))
            // return (productdetails)
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
            dispatch(selectedProductFailure(errorMsg))
        })
    }
}
