import { USER_CART_FETCH_FAILURE, USER_CART_FETCH_SUCCESS } from "./userCartTypes"

const initialState = {
    cart:[],
    error:''
}

const userCartReducer =(state = initialState, action)=>{
    switch(action.type){
        case USER_CART_FETCH_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                error:''
            }
        case USER_CART_FETCH_FAILURE:
            return{
                ...state,
                cart:[],
                error: action.payload
            }
        default: return state
    }
}

export default userCartReducer