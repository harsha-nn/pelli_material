import { ON_AUTH_PENDING,ON_AUTH_SUCCESS,ON_AUTH_FAILURE } from "./constants";
import { SIGN_OUT } from "./constants";


const initialStateSignin = {
    user:[],
    isPending:false,
    error:'',
    isSignedIn:false,    
}

export const onSignin = (state=initialStateSignin,action={}) => {
    switch (action.type) {
        case ON_AUTH_PENDING:
            return (Object.assign({},state,{isPending:true}))               
        case ON_AUTH_SUCCESS:
            return (Object.assign({},state,{user:action.payload,isPending:false,isSignedIn:true}))
        case ON_AUTH_FAILURE:
            return (Object.assign({},state,{error:action.payload,isPending:false,isSignedIn:false}))
        default:
            return state;
    }
} 

const initialStateSignOut = {
    isSignedOut: false,
}
export const onSignOut = (state=initialStateSignOut,action={}) =>{
    console.log("Reducer OnSignOut called");
    switch (action.type) {
        case SIGN_OUT:
            return Object.assign({},state,{isSignedOut:true})    
        case ON_AUTH_PENDING:
            return Object.assign({},state,{isSignedOut:false})
        case ON_AUTH_FAILURE:
            return Object.assign({},state,{isSignedOut:false})
        default:
            return state;
    }
}