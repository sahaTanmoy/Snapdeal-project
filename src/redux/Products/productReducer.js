import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "./productTypes"

const initialState = {
    loading: false,
    products: [],
    error: ''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            console.log("Loading: ", state.loading);
            console.log("success");
            return{
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer