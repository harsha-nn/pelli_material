import { ON_AUTH_PENDING,ON_AUTH_SUCCESS,ON_AUTH_FAILURE } from "./constants";
import {SIGN_OUT} from './constants';


//Sign in action. When a user signs in we check the account in backend and return the user if successful.

export const ON_SIGNIN = (user)=> (dispatch) =>{    
    dispatch({type:ON_AUTH_PENDING,payload:user});
    console.log("In action email,password:", user);
    fetch('http://localhost:3001/signin',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .then(data=>dispatch({type:ON_AUTH_SUCCESS, payload:data}))
    .catch(err=>dispatch({type:ON_AUTH_FAILURE,payload:err}))      
}

export const onSignout=()=>({type:SIGN_OUT})