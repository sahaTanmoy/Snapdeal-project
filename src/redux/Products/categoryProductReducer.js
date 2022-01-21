
import { FETCH_CATEGORY_PRODUCTS_REQUEST, FETCH_CATEGORY_PRODUCTS_SUCCESS, FETCH_CATEGORY_PRODUCTS_FAILURE } from './categoryProductTypes'

const initialState = {
    loading: false,
    categoryProducts: [],
    error: ''
}

const categoryProductReducer = (state = initialState, action2) => {
    // console.log(state.categoryProducts);
    switch (action2.type) {
        case FETCH_CATEGORY_PRODUCTS_REQUEST:

            return {
                ...state,
                loading: true
                
            }

        case FETCH_CATEGORY_PRODUCTS_SUCCESS:
            // console.log("Products", action2.payload);
            return {
                ...state,
                loading: false,
                categoryProducts: action2.payload,
                error: ''
            }

        case FETCH_CATEGORY_PRODUCTS_FAILURE:

            return {
                ...state,
                loading: false,
                categoryProducts: [],
                error: action2.payload
            }
        default:
            return state
    }
}

export default categoryProductReducer


