import axios from "axios";
import { FETCH_CART_PRODUCT_DETAILS } from "./cartProductDetailsTypes"

export const selectedCartProduct=(cartproduct)=>{
    return{
        type: FETCH_CART_PRODUCT_DETAILS,
        payload: cartproduct
    }
}

export const fetchCartProductDetails=(id)=>{
    console.log("Data fetching",id)
    return (dispatch)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response6=>{
            const productdetails1= response6.data
            console.log(99999,productdetails1);
            dispatch(selectedCartProduct(productdetails1))
            // return (productdetails)
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
        })
    }
}