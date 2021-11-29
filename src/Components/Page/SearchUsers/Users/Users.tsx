import React from "react"

interface Props {
    users:any,
    fetchUser: (text: string) => void,
}

const Users:React.FC<Props> = ({users,fetchUser})=>{
    return (
        <>
            {
                users.map((e: any) => {
                    return (
                        <div onClick={()=>{
                            fetchUser(e.login)
                        }} key={e.id} className="SearchUsers-block_box">
                            <img src={e.avatar_url} alt=""/>
                            <p>{e.login}</p>
                            <span>{e.id}</span>
                        </div>

                    )
                })
            }
        </>
    )
}
export default Users