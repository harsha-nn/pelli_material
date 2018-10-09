import {
ON_STEP1_PENDING,
ON_STEP1_SUCCESS,
ON_STEP1_FAILURE
} from './constants';


export const on_step1 = (user)=> (dispatch) =>{    
    dispatch({type:ON_STEP1_PENDING,payload:user});
    console.log("In action email,password:", user);
    fetch('http://localhost:3001/register',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .then(data=>dispatch({type:ON_STEP1_SUCCESS, payload:data}))
    .catch(err=>dispatch({type:ON_STEP1_FAILURE,payload:err}))      
}