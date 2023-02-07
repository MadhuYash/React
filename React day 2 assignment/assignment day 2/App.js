// import logo from './logo.svg';
import './App.css';
import ClassBased from "./components/classBased";
import Functional from "./components/functional";
import UseState from "./components/useState";

const userData = [
{
  Username: "Madhavi konakanchi",
  age: "27",
  gender: "female",
  
},
{
  Username: "Raviteja Pilli",
  age: "25",
  gender: "male",
  
},
{
  Username: "Ramesh Konakanchi",
  age: "29",
  gender: "male",
 
},
]
function App() {
  return (
    <div className="App">
      
              <ClassBased userData={userData}/>
              <Functional userData={userData}/>
              <UseState userData={userData}/>
              
  
     
    </div>
  );
}

export default App;


  