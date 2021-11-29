import {ReposAction} from "../repos/repos"

export interface UserState {
    img:string,
    login:string,
    email:string,
    location:string,
    name:string,
    followers:string,
    following:string,
    bio:string,

    loading:boolean,
    error:null
}

export enum UserActionsTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
}

interface FetchUserActions {
    type:UserActionsTypes.FETCH_USER
}
interface FetchUserSuccessActions {
    type:UserActionsTypes.FETCH_USER_SUCCESS,
    payload:any
}
interface FetchUserErrorActions {
    type:UserActionsTypes.FETCH_USER_ERROR,
    payload:any
}

export type UserAction = FetchUserActions | FetchUserSuccessActions | FetchUserErrorActions | ReposAction