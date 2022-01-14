import axios from "axios"
import { FETCH_CATEGORY_PRODUCTS } from "./categoryProductTypes"

export const fetchCategoryProductSucess=categoryProducts=>{
    console.log("gfxhfxgfx",categoryProducts);
    return{
        type: FETCH_CATEGORY_PRODUCTS,
        payload: categoryProducts
    }
}

export const fetchCategoryProducts=(category)=>{
    console.log("api called", category);
    return  (dispatch)=>{
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
        })
    }
}