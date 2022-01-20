
import { FETCH_CATEGORY_PRODUCTS } from './categoryProductTypes'

const initialState={
    categoryProducts: []
}

const categoryProductReducer=(state=initialState,action2)=> {
    // console.log(state.categoryProducts);
    switch(action2.type){
        case FETCH_CATEGORY_PRODUCTS:
            console.log("Products", action2.payload);
            return{
                ...state,
                categoryProducts: action2.payload
            }
        default:
            return state
    } 
}

export default categoryProductReducer


