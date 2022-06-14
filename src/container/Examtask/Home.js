import React from 'react';

function Home({data}) {
   
        let data = employeeData.filter((e)=> e.salary>25000)
        console.log(data);
    
        return(
            <div>
                <table>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Joining_date</th>
                    <th>Salary</th>

                    {
                        data.map((e,i) => {
                        const {id,name,joining_date,salary}=e;
                            return(
                                <tr key={i}>
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