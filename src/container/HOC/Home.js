import React from 'react';

function Home({data}) {
    return (
        <div>
            <table border='1'>
                <th>Id</th>
                <th>Name</th>
                <th>Joining_date</th>
                <th>Salary</th>

                {
                    data.map((e,i) => {
                        const {id,name,joining_date,salary} = e;

                        return(
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{joining_date}</td>
                                <td>{salary}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Home;