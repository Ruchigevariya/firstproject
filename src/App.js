import logo from './logo.svg';
import './App.css';
import Country from './container/Country';
import CountryFun from './container/CountryFun';
import City from './container/City';
import CityFun from './container/CityFun';
import Time from './container/Time/Time';
import TimeFuc from './container/Time/TimeFuc';
import Counter from './container/Counter/Counter';
import CounterFun from './container/Counter/CounterFun';
import { useEffect, useState } from 'react';
import Loading from './container/HOC/Loading';
import Home from './container/HOC/Home';
import Product from './container/HOC/Product';

const HomewithLoading = Loading(Home);

function App() {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([ ])

  const employeeData=
    [
        {
            id: 101,
            name: 'Amit',
            joining_date: "01-06-2021",
            salary: 50000
        },
        {
            id: 102,
            name: 'Piyush',
            joining_date: "01-01-2019",
            salary: 60000
        },
        {
            id: 103,
            name: 'Meet',
            joining_date: "01-03-2020",
            salary: 25000
        },
        {
            id: 104,
            name: 'Lalit',
            joining_date: "01-12-2021",
            salary: 30000        
        }
    ];
  
    const emfdata = employeeData.filter((e) =>e.salary > 25000)
      // console.log(emfdata);

  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{setLoading(false) ; setData(emfdata)},2000)
  }
  ,[])
  return (
   <div>    

       {/* hoc ne moklva mate value pass karvi pde atle props through kari */}
      <HomewithLoading isLoading = {loading} data = {data}/>
   </div>

  );
}

export default App;