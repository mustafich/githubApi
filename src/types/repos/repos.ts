
export interface ReposState {
    repos:any,

    loading:boolean,
    error:null
}

export enum ReposActionsTypes {
    FETCH_REPOS = "FETCH_REPOS",
    FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS",
    FETCH_REPOS_ERROR = "FETCH_REPOS_ERROR",
}

interface FetchReposActions {
    type:ReposActionsTypes.FETCH_REPOS
}
interface FetchReposSuccessActions {
    type:ReposActionsTypes.FETCH_REPOS_SUCCESS,
    payload:any
}
interface FetchReposErrorActions {
    type:ReposActionsTypes.FETCH_REPOS_ERROR,
    payload:any
}

export type ReposAction = FetchReposActions | FetchReposSuccessActions | FetchReposErrorActions