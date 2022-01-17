import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    users: [],
    error: ''
}

const reducer=(state=initialState,action3)=>{
    switch(action3.type){
        
        case FETCH_USERS_SUCCESS:
            console.log("Loading: ", state.loading);
            console.log("success");
            return{
                ...state,
                
                users: action3.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                
                users: [],
                error: action3.payload
            }
        default: return state
    }
}

export default reducer