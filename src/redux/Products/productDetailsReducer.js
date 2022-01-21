import { FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS, FETCH_PRODUCT_DETAILS_FAILURE } from "./productDetailsTypes"

const initialState = {
    loading: false,
    product: [],
    error: ''
}

const productDetailsReducer = (state = initialState, action5) => {
    switch (action5.type) {
        case FETCH_PRODUCT_DETAILS_REQUEST:

            return {
                ...state,
                loading: true    
            }

        case FETCH_PRODUCT_DETAILS_SUCCESS:

            return {
                ...state,
                loading: false,
                product: action5.payload,
                error: ''
            }
        case FETCH_PRODUCT_DETAILS_FAILURE:

            return {
                ...state,
                loading: false,
                product: [],
                error: action5.payload
            }
        default:
            return state
    }
}

export default productDetailsReducer
