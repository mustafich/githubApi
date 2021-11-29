import {UserAction, UserActionsTypes, UserState} from "types/user/user"


const initialState:UserState = {
    img:"",
    login:"",
    email:"",
    location:"",
    name:"",
    followers:"",
    following:"",
    bio:"",

    loading:false,
    error:null,
}


export const userReducer = (state= initialState,action:UserAction): UserState=>{
    switch (action.type) {
        case UserActionsTypes.FETCH_USER:
            return {
                ...state,

                loading:true,
                error:null,
            }
        case UserActionsTypes.FETCH_USER_SUCCESS:
            return {
                img:action.payload.avatar_url,
                login:action.payload.login,
                email:action.payload.email,
                location:action.payload.location,
                name:action.payload.name,
                followers:action.payload.followers,
                following:action.payload.following,
                bio:action.payload.bio,

                loading:false,
                error:null,
            }
        case UserActionsTypes.FETCH_USER_ERROR:
            return {
                ...state,

                loading:false,
                error:action.payload,
            }
        default:
            return state
    }
}