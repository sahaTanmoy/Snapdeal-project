import axios from "axios"
import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productTypes"

export const fetchProductRequest =()=> {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductSuccess =products=> {
    console.log("Data Fetched2");
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductFailure =error=> {
    // console.log("error2");
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch(fetchProductRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            const products= response.data
            console.log(products);
            dispatch(fetchProductSuccess(products))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg);
            dispatch(fetchProductFailure(errorMsg))
        })
    }
}