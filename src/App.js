import logo from './logo.svg';
import './App.css';
import Demo from './components/Demo';

function App() {

  // const person = {
  //   name: "Amit",
  //   age: 25
  // }

  // console.log(person.name,person.age);

  // const person = [
  //   {
  //       name: "Amit",
  //       age: 25,
  //   },
  //   {
  //       name: "Piyush",
  //       age: 40,
  //   },

  // ];

  // person.map((p) => console.log(p.name,p.age));


  // const person = {
  //   name: "Amit",
  //   age: 25,
  //   course: [
  //       "C",
  //       "HTML"
  //   ]
  // }

  // console.log(person.name,person.age);

  // person.course.map((p) => console.log(p));

  // const person = [
  //   {
  //       name: "Amit",
  //       age: 25,
  //       course: [
  //           "C",
  //           "HTML"
  //       ]
  //   },
  //   {
  //       name: "Ajay",
  //       age: 40,
  //       course: [
  //           "Java",
  //           "JavaScript"
  //       ]
  //   }
  // ]

  // person.map((p) => {console.log(p.name,p.age);
  //   p.course.map((p1) => console.log(p1));
  // });

  const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
  }

  for(let k in myObj){
    if(k === "cars"){
      for(let j in myObj[k]){
        console.log(myObj[k][j]);
      }
    }else{
      console.log(myObj[k]);
    }
  }

  return (
    <div>
      <Demo />
    </div>
  );
}

export default App;
