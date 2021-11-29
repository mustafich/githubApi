import React, {memo} from "react"

interface Props {
    arr:string[];
}

const UserRepository:React.FC<Props> = ({arr}) =>{

    const viewRepo = (arr: string[]) => {
        return (
            <div className="User-search">
                {
                    arr.map((e:any) => {
                        return (
                            <div onClick={() => {
                                window.open(e.clone_url);
                            }} key={e.id} className="User-search_box">
                                <div className="User-search_box__left">
                                    <p>{e.name}</p>
                                </div>
                                <div className="User-search_box__right">
                                    <p>Forks: {e.forks}</p>
                                    <p>Like: {e.watchers_count}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            {viewRepo(arr)}
        </>
    )
}

export default memo(UserRepository)