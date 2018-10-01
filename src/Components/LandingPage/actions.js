import { ON_SIGNIN } from "./constants";

export const ON_SIGNIN = (email,password) =>({
    type: ON_SIGNIN,
    payload:email,password
})