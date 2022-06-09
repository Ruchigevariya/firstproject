import React from 'react';

function Product({data}) {
    return (
        <div>
          {
            data.map((d,i) => {
                return(
                    <div key={i}>
                        <h3>{d.id}</h3>
                        <h4>{d.name}</h4>
                    </div>
                )
            })
        }  
        </div>
    );
}

export default Product;