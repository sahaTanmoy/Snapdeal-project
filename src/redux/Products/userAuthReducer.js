import { FETCH_AUTHENTICATION } from "./userAuthTypes"

const initialState={
    AuthStatus: false,
    AuthUser: []
}

const authReducer = (state=initialState, action9)=>{
    switch(action9.type){
        case FETCH_AUTHENTICATION: return{
            ...state,
            AuthStatus: action9.payload,
            AuthUser: action9.payload1
        }
        default: return state
    }
}

export default authReducer