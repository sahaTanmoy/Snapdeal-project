import { USER_CART_FETCH_REQUEST, USER_CART_FETCH_FAILURE, USER_CART_FETCH_SUCCESS } from "./userCartTypes"

const initialState = {
    loading: false,
    cart:[],
    error:''
}

const userCartReducer =(state = initialState, action)=>{
    switch(action.type){
        case USER_CART_FETCH_REQUEST:
            return {
                ...state,
                loading: true
                
            }
        case USER_CART_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error:''
            }
        case USER_CART_FETCH_FAILURE:
            return{
                ...state,
                loading: false,
                cart:[],
                error: action.payload
            }
        default: return state
    }
}

export default userCartReducer