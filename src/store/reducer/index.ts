import {combineReducers} from "redux";
import {usersReducer} from "./users/usersReducer";

import {userReducer} from "./user/userReducer";
import {reposReducer,} from "./repos/reposReducer";

export const rootReducer = combineReducers({
  users:usersReducer,
  user:userReducer,
  repos:reposReducer
})
export type RootState = ReturnType<typeof rootReducer>