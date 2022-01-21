import axios from "axios"
import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FETCH_CATEGORY_PRODUCTS_FAILURE } from "./categoryProductTypes"

export const fetchCategoryProductRequest = () => {
    return{
        type: FETCH_CATEGORY_PRODUCTS_REQUEST
        
    }
}

export const fetchCategoryProductSucess=categoryProducts=>{
    // console.log("gfxhfxgfx",categoryProducts);
    return{
        type: FETCH_CATEGORY_PRODUCTS_SUCCESS,
        payload: categoryProducts
    }
}

export const fetchCategoryProductFailure=error=>{
    // console.log("gfxhfxgfx",categoryProducts);
    return{
        type: FETCH_CATEGORY_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchCategoryProducts=(category)=>{
    console.log("api called", category);
    return  (dispatch)=>{
        dispatch(fetchCategoryProductRequest())
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then(response4=>{
            console.log("api");
            const categoryProducts= response4.data
            console.log(categoryProducts);
            dispatch(fetchCategoryProductSucess(categoryProducts))
        })
        .catch(error=>{
            const errorMsg=error.message
            console.log(errorMsg)
            // console.log("error");
            dispatch(fetchCategoryProductFailure(errorMsg))
        })
    }
}