
import Inputs from "./Inputs";
import List from "./List";
import Checkbox from "./Checkbox";
import { useState, Fragment, useRef} from "react";

function App() {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [clg,setClg]=useState('')
  const[find,setFind]=useState(false)
  const [details,setDetails]=useState([])
  const nameRef=useRef()

  const submitHandler=(e)=>{
    e.preventDefault()
    if(name.length ===0 || age < 0||age.length ===0|| clg.length===0){
      setFind(true)
      return;
    }
    const id=details.length?details.length+1:1;
    const input={
      id:id,
      name:name,
      age:age,
      clg:clg
    }
   console.log( nameRef.current.parentElement.parentElement)
   details.unshift(input)
   setDetails(details)
   setName('')
   setAge('')
   setClg('')
   
  }
  return (
    <Fragment>
      <Inputs 
      find={find}
      name={name}
      setName={setName}
      age={age}
      clg={clg}
      setClg={setClg}
      setAge={setAge}
      submitHandler={submitHandler}
      nameRef={nameRef}
      />
      {details.length && details.map(i=><List i={i}/>)}

      {find && 
      <Checkbox 
      name={name}
      age={age}
      clg={clg}
      setFind={setFind}/>}
    </Fragment>
  );
}
export default App;
