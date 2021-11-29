
export interface UsersState {
    users:any,

    loading:boolean,
    error:null
}

export enum UsersActionsTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersActions {
    type:UsersActionsTypes.FETCH_USERS
}
interface FetchUsersSuccessActions {
    type:UsersActionsTypes.FETCH_USERS_SUCCESS,
    payload:any
}
interface FetchUsersErrorActions {
    type:UsersActionsTypes.FETCH_USERS_ERROR,
    payload:any
}

export type UsersAction = FetchUsersActions | FetchUsersSuccessActions | FetchUsersErrorActions