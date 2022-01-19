import axios from "axios";
import { FETCH_PRODUCT_DETAILS } from "./productDetailsTypes"

export const selectedProduct=(product)=>{
    return{
        type: FETCH_PRODUCT_DETAILS,
        payload: product
    }
}

export const fetchProductDetails=(id)=>{
    console.log("Data fetching",id)
    return (dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response6=>{
            const productdetails= response6.data
            console.log(productdetails);
            dispatch(selectedProduct(productdetails))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
        })
    }
}
