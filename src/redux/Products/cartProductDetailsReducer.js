import { FETCH_CART_PRODUCT_DETAILS } from "./cartProductDetailsTypes"

const initialState = {
    cartproduct: []
}

const cartProductDetailsReducer=(state=initialState, action9)=> {
    switch(action9.type){
        case FETCH_CART_PRODUCT_DETAILS: 
            
            return {
                ...state, 
                cartproduct: state.cartproduct.concat(action9.payload) }
        default:
            return state
    }
}

export default cartProductDetailsReducer
