
import Inputs from "./Inputs";
import List from "./List";
import Checkbox from "./Checkbox";
import { useState } from "react";

function App() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const[find,setFind]=useState(false)
  const [details,setDetails]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    if(name.length ===0 || age < 0||age.length ===0){
      setFind(true)
      return;
    }
    const id=details.length?details.length+1:1;
    const input={
      id:id,
      name:name,
      age:age
    }
    
   details.unshift(input)
   setDetails(details)
   setName('')
   setAge('')
   
  }
  return (
    <div>
      <Inputs 
      find={find}
      name={name}
      setName={setName}
      age={age}
      setAge={setAge}
      submitHandler={submitHandler}
      />
      {details.length && details.map(i=><List i={i}/>)}

      {find && 
      <Checkbox 
      name={name}
      age={age}
      setFind={setFind}/>}
    </div>
  );
}
export default App;
