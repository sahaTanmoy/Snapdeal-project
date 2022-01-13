import { FETCH_PRODUCT_DETAILS } from "./productTypes"

// const initialState = {
//     product: {}
// }

const productDetailsReducer=(state={}, action)=> {
    switch(action.type){
        case FETCH_PRODUCT_DETAILS: 
            return {
                ...state, 
                ...action.payload }
        default:
            return state
    }
}

export default productDetailsReducer
