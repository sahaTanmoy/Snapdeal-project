import React from 'react'
import { FETCH_PRODUCT_CATEGORIES } from './productCategoryTypes'

const initialState={
    categories: []
}

const productCategoryReducer=(state=initialState, action)=> {
    switch(action.type){
        case FETCH_PRODUCT_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default productCategoryReducer
