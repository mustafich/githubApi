import React, {useState, useEffect} from "react"
import {useActions} from "hooks/useActions"

import "./css/index.css"
import {useTypesSelector} from "hooks/useTypedSelected"
import UserRepository from "Components/Page/User/UserRepository/UserRepository";
import UserProfile from "./UserProfile/UserProfile";
import ErrorLoadingBoundary from "Components/HOC/ErrorLoadingBoundary/ErrorLoadingBoundary";


const User: React.FC = () => {
    const [searchRepo, setSearchRepo] = useState("")
    const [repoArr, setRepoArr] = useState([])
    const {user, repos} = useTypesSelector(state => state)
    const {fetchRepos} = useActions()

    useEffect(()=>{
        setRepoArr(repos.repos)
    },[repos.repos])

    useEffect(() => {
        if (user.login !== "") {
            fetchRepos(user.login)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.login])

    useEffect(() => {
        let reposArrFilter = repos.repos.filter((item: any) => {
            return item.name.toLowerCase().indexOf(searchRepo.toLowerCase()) > -1
        })
        setRepoArr(reposArrFilter)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchRepo])

    return (
        <>
            <div className="User">
                <h2>GitHub Searcher</h2>
                <ErrorLoadingBoundary loading={user.loading} error={user.error}>
                    <UserProfile user={user} searchRepo={searchRepo} setSearchRepo={setSearchRepo}/>
                </ErrorLoadingBoundary>
                <ErrorLoadingBoundary loading={repos.loading} error={repos.error}>
                    <UserRepository arr={repoArr} />
                </ErrorLoadingBoundary>
            </div>
        </>
    )
}

export default User