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
  // let [a,b,c,d,e] = arr1;

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
  // let {id,name,location} = Obj1;

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

  let employeedata =
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ]
    // Medicinedata
    let fdata= data.filter((d) => d.status === true && d.expiry >= 2022)
      console.log(fdata);

    let ans = fdata.reduce((acc,d,i) => acc + d.price,0)
      console.log(ans);

    // employeedata
    let emfdata = employeedata.filter((e) => e.status === true)
      console.log(emfdata);

    let employeeans = emfdata.reduce((acc,e,i) => acc + e.salary +e.bonus,0)
      console.log(employeeans);

  return (
    <div>
      <table border='1'>
        <th>Id</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Status</th>
        <th>Total price</th>

        {
          fdata.map((d,i) => {
            let {id,name,quantity,price,expiry,status} = d;

            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{expiry}</td>
                <td>{status.toString()}</td>
                {(i === 0) ? <td rowspan={2}>{ans}</td> : null}
              </tr>
            )
          })
        }
      </table>

      <table border='1'>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Status</th>
        <th>Employee expenses</th>
        <th>Total</th>

        {
          emfdata.map((e,i) => {
            let {name,age,salary,bonus,status} = e;

            return (
              <tr key={i}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{bonus}</td>
                <td>{status.toString()}</td>
                <td>{salary + bonus}</td>
                {(i === 0) ? <td rowspan={4}>{employeeans}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>

  );
}

export default App;
