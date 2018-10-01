import { VIEW_RECO_PROFILES } from "./constants";

const initialState = {
    profiles:""
}

export const viewRecoProfilesAll = (state=initialState, action={})=>{
    switch (action.type) {
        case VIEW_RECO_PROFILES: 
            return Object.assign({},state,{profiles:action.payload})               
        default: return state;            
    }
}