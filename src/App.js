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


const HomewithLoading = Loading(Home);

function App() {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([ ])

  const orgData = [
    {id:101,name:"Ruchi"},
    {id:102,name:"Richa"}
  ]
  useEffect(() => {
    setLoading(true);
    setTimeout(() =>{setLoading(false) ; setData(orgData)},2000)
  }
  ,[])
  return (
   <div>
      <HomewithLoading isLoading = {loading} data = {data}/>
   </div>

  );
}

export default App;
