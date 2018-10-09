import {
    ON_STEP1_PENDING,
    ON_STEP1_SUCCESS,
    ON_STEP1_FAILURE
    } from './constants';

inititalStateStep1 ={
    user:[],
    
}
export const onStep1 = (state=initialStateStep1,action={}) => {
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