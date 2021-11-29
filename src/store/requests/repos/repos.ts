
import {ReposAction,ReposActionsTypes} from "types/repos/repos"
import {Dispatch} from "redux"
import axios from "axios";
import url from "urlGlobal";

export const fetchRepos = (login:string)=>{
    return async (dispatch: Dispatch<ReposAction>)=>{
        try {
            dispatch({type:ReposActionsTypes.FETCH_REPOS})
            const response = await axios.get(url+`users/${login}/repos`)
                   dispatch({
                       type:ReposActionsTypes.FETCH_REPOS_SUCCESS,
                       payload:response.data
                   })
        } catch (e) {
            dispatch({
                type:ReposActionsTypes.FETCH_REPOS_ERROR,
                payload:"Ошибка ПОСТА"}
            )
        }
    }
}
