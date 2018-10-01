import { ON_SIGNIN } from "./constants";

const initialStateSignin = {
    email:"",
    password:""
}

export const onSignin = (state=initialStateSignin,action={}) => {
    switch (action.type) {
        case ON_SIGNIN:
            return (Object.assign({},state,{user:action.payload}))               
        default:
            return state;
    }
} 