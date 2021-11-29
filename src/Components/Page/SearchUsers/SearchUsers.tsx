import React,{useState,useEffect} from "react"
import { useActions } from "hooks/useActions"

import "./css/index.css"
import { useTypesSelector } from "hooks/useTypedSelected"
import ErrorLoadingBoundary from "Components/HOC/ErrorLoadingBoundary/ErrorLoadingBoundary"
import Users from "./Users/Users"




const SearchUsers:React.FC = ()=>{
    const [searchText,setSearchText] = useState("")
    const {users} = useTypesSelector(state=>state)
    const {fetchUsers,fetchUser} = useActions()
    useEffect(()=>{
        if(searchText!=="") {
            fetchUsers(searchText)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchText])
    return (
        <>
           <div className="SearchUsers">
               <h2>GitHub Searcher</h2>
               <div className="SearchUsers-block">
                   <div className="SearchUsers-block_search">
                       <input onChange={(e)=>{
                           setSearchText(e.target.value)
                       }} value={searchText} type="text"/>
                   </div>
                   <ErrorLoadingBoundary loading={users.loading} error={users.error}>
                       <Users users={users.users} fetchUser={fetchUser}/>
                   </ErrorLoadingBoundary>
               </div>
           </div>
        </>
    )
}

export default SearchUsers