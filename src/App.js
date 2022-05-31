import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

function App() {

    // Array:-
    // let arr1 = [10,20,30,40,50]

    // // copy
    // let arr2 = [...arr1]

    // console.log(arr2);

    // // Merging
    // let arr3 = [99,...arr1,100]
    // console.log(arr3);

    // // destructuring
    // let [a,b,c,d,e] =arr1
    
    // console.log(c);

    // // object:-

    // let Obj1 ={
    //   id:101,
    //   name:'Ruchi'
    // };
  
    // //copy 
    // let Obj2 ={...Obj1}

    // console.log(Obj2);

    // // Merging
    // let Obj3 ={
    //   id:102,
    //   name:'Richa',
    //   location:'Surat',
    //   ...Obj1
    // };

    // console.log(Obj3);

    // // destructuring
    // let {id,name,location} = Obj1

    // console.log(name);

    let data =
    [
       {
         id: 101,
         name: 'Abacavir',
         quantity: 25,
         price: 150,
         expiry: 2022,
         status: true
       },
       {
         id: 102,
         name: 'Eltrombopag',
         quantity: 90,
         price: 550,
         expiry: 2021,
         status: true
       },
       {
         id: 103,
         name: 'Meloxicam',
         quantity: 85,
         price: 450,
         expiry: 2025,
         status: false
       },
       {
         id: 104,
         name: 'Allopurinol',
         quantity: 50,
         price: 600,
         expiry: 2023,
         status: true
       },
       {
         id: 105,
         name: 'Phenytoin',
         quantity: 63,
         price: 250,
         expiry: 2021,
         status: false
       }
     ];
  return (
    <div>
      <table border='1'>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Status</th>
     
      {
    
          data.map((d) => {
            return(
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.quantity}</td>
                <td>{d.price}</td>
                <td>{d.expiry}</td>
                <td>{d.status.toString()}</td>
            </tr>
            )
          })
        
        }
        </table> 
    </div>
  
  );
}

export default App;
