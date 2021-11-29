import {ReposAction, ReposActionsTypes, ReposState} from "types/repos/repos"


const initialState:ReposState = {
    repos:[],

    loading:false,
    error:null,
}


export const reposReducer = (state= initialState,action:ReposAction): ReposState=>{
    switch (action.type) {
        case ReposActionsTypes.FETCH_REPOS:

            return {
                repos:state.repos,

                loading:true,
                error:null,
            }
        case ReposActionsTypes.FETCH_REPOS_SUCCESS:

            return {
                repos:action.payload,

                loading:false,
                error:null,
            }
        case ReposActionsTypes.FETCH_REPOS_ERROR:
            return {
                repos:state.repos,

                loading:false,
                error:action.payload,
            }
        default:
            return state
    }
}