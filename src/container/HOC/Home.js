import React from 'react';

function Home({data}) {
    return (
        <div>
        {
            data.map((d,i) => {
                return(
                    <div>

                    </div>
                )
            })
        }
        
        </div>
    );
}

export default Home;