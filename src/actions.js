import { VIEW_RECO_PROFILES } from "./constants";

export const viewRecommendedProfile = (recoprofiles) => ({
    type: 'VIEW_RECO_PROFILES',
    payload:recoprofiles
})