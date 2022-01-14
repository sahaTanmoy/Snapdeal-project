import axios from "axios";
import { FETCH_PRODUCT_CATEGORIES } from "./productCategoryTypes";

export const fetchProductCategorySuccess =categories=> {
    console.log("category Fetched2");
    return {
        type: FETCH_PRODUCT_CATEGORIES,
        payload: categories
    }
}

export const fetchProductCategory=()=>{
    return (dispatch)=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            const categories= response.data
            console.log(categories);
            dispatch(fetchProductCategorySuccess(categories))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
        })
    }
}