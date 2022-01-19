import { FETCH_PRODUCT_DETAILS } from "./productDetailsTypes"

const initialState = {
    product: []
}

const productDetailsReducer=(state=initialState, action5)=> {
    switch(action5.type){
        case FETCH_PRODUCT_DETAILS: 
            
            return {
                ...state, 
                product: action5.payload }
        default:
            return state
    }
}

export default productDetailsReducer
