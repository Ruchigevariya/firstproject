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
const ProductwithLoading = Loading(Product);

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
       {/* hoc ne moklva mate value pass karvi pde atle props through kari */}
      <HomewithLoading isLoading = {loading} data = {data}/>
      <ProductwithLoading data = {data}/>
   </div>

  );
}

export default App;
