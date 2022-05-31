import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

function App() {

    // Array:-
    let arr1 = [10,20,30,40,50]

    // copy
    let arr2 = [...arr1]

    console.log(arr2);

    // Merging
    let arr3 = [99,...arr1,100]
    console.log(arr3);

    // destructuring
    let [a,b,c,d,e] =arr1
    
    console.log(c);

    // object:-

    let Obj1 ={
      id:101,
      name:'Ruchi'
    };
  
    //copy 
    let Obj2 ={...Obj1}

    console.log(Obj2);

    // Merging
    let Obj3 ={
      id:102,
      name:'Richa',
      location:'Surat',
      ...Obj1
    };

    console.log(Obj3);

    // destructuring
    let {id,name,location} = Obj1

    console.log(name);
  return (
    <div>
      <Demo />
    </div>
  );
}

export default App;
