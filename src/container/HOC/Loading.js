import React from 'react';

function Loading(Compenent) {
    return function LoadingwithComponent({isLoading,data}) {
        if(isLoading){
            return(
                <p>Loading....</p>
            )
        }else{
            return(
                <Compenent data={data}/>
            )
        }
    }
}

export default Loading;