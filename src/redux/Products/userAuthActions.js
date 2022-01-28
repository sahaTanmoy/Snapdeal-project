import { FETCH_AUTHENTICATION } from "./userAuthTypes";

export const isAuthenticated =(bool, obj)=>{
    console.log(333,bool);
    console.log(33,obj);
    return {
        type: FETCH_AUTHENTICATION,
        payload: bool,
        payload1: obj
    }
}