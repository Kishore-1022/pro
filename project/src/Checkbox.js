import React from 'react'
import  ReactDOM  from 'react-dom'



const Checkbox = (props) => {
  return ReactDOM.createPortal(
   
    <div className='d-flex justify-content-center checkbox'>
      <div className=' w-50  white  mt-4 '>
        <h1 className='red w-100 p-2'>Invalid input</h1>
        <div className='p-2'>  
            {!props.name.length ? <p>Please enter a valid name and age (non-empty values).</p>:!props.age.length ? <p>Please enter a valid name and age (non-empty values).</p> : '' }
            {props.age<0 &&<p>Please enter a valid age (greater than 0).</p>}
            {!props.clg.length && <p>Please enter a valid college name.</p>}
            
        </div>
        <div className='d-flex justify-content-center'>
           <button className='btn btn-dark mb-1' 
           onClick={()=>props.setFind(false)}>Okay</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
   
  )
}

export default Checkbox