import {UsersAction,UsersActionsTypes} from "types/users/users"
import {Dispatch} from "redux"
import axios from "axios";
import url from "urlGlobal";

export const fetchUsers = (searchText:string)=>{
    return async (dispatch: Dispatch<UsersAction>)=>{
        try {
            dispatch({type:UsersActionsTypes.FETCH_USERS})
            const response = await axios.get(url+`search/users?q=${searchText}`)
               dispatch({
                   type:UsersActionsTypes.FETCH_USERS_SUCCESS,
                   payload:response.data
               })
        } catch (e) {
            dispatch({
                type:UsersActionsTypes.FETCH_USERS_ERROR,
                payload:"Ошибка ПОСТА"}
            )
        }
    }
}