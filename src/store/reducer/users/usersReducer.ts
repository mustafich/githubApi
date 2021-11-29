import {UsersAction, UsersActionsTypes, UsersState} from "types/users/users"


const initialState:UsersState = {
    users:[],

    loading:false,
    error:null,
}


export const usersReducer = (state= initialState,action:UsersAction): UsersState=>{
    switch (action.type) {
        case UsersActionsTypes.FETCH_USERS:
            return {
                users:[...state.users],

                loading:true,
                error:null,
            }
        case UsersActionsTypes.FETCH_USERS_SUCCESS:
            return {
                users:action.payload.items,

                loading:false,
                error:null,
            }
        case UsersActionsTypes.FETCH_USERS_ERROR:
            return {
                users:[],

                loading:false,
                error:action.payload,
            }
        default:
            return state
    }
}