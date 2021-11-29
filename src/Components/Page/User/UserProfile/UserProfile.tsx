import React, {memo} from "react"


interface Props {
    user:any,
    searchRepo:string,
    setSearchRepo: (text: string) => void
}
const UserProfile:React.FC<Props> = ({user,searchRepo,setSearchRepo})=>{
    return (
        <>
            <div className="User-block">
                <div className="User-block_left">
                    <img src={user.img} alt=""/>
                </div>
                <div className="User-block_right">
                    <p>UserName: {user.login}</p>
                    <p>Location: {user.location}</p>
                    <p>Join Date: {user.name}</p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                </div>
            </div>
            <div className="User-text">
                <p>{user.bio}</p>
            </div>
            <input placeholder={"Search for Users Repositories"} onChange={(e) => {
                setSearchRepo(e.target.value)
            }} value={searchRepo} type="text"/>
        </>
    )
}
export default memo(UserProfile)
