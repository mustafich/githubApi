import React from "react"
import Error from "Components/Error/Error";
import Loading from "Components/Loading/Loading";

interface Props {
    loading:boolean,
    error:any
    children: any;
}

const ErrorLoadingBoundary: React.FC<Props> = ({
                                                   loading,
                                                    error,
                                                   children
                                               }) => {
    let viewFucComponent = ()=>{
        if(error) {
            return <Error/>
        } else if(loading){
            return <Loading/>
        } else {
            return children
        }
    }
    return (
        <>
            {viewFucComponent()}
        </>
    )
}

export default ErrorLoadingBoundary;
