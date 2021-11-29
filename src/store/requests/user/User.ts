import {UserAction,UserActionsTypes} from "types/user/user"
import {ReposActionsTypes } from "types/repos/repos";
import {Dispatch} from "redux"
import axios from "axios";
import url from "urlGlobal";


export const fetchUser = (login:string)=>{

    return async (dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type:ReposActionsTypes.FETCH_REPOS})
            dispatch({type:UserActionsTypes.FETCH_USER})
            const response = await axios.get(url+`users/${login}`)

            dispatch({
                type:UserActionsTypes.FETCH_USER_SUCCESS,
                payload:response.data
            })
        } catch (e) {
            dispatch({
                type:UserActionsTypes.FETCH_USER_ERROR,
                payload:"Ошибка ПОСТА"}
            )
        }
    }
}