import * as fetchUsers from "./users/Users"
import * as fetchUser from "./user/User"
import * as fetchRepos from "./repos/repos"

export default {
  ...fetchUsers,
  ...fetchUser,
  ...fetchRepos,

}