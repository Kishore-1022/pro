import React from 'react'

const Checkbox = (props) => {
    console.log(props.name)
  return (
   
    <div className='d-flex justify-content-center'>
         <div className=' w-50  white  mt-4 '>
        <h1 className='red w-100 p-2'>Invalid input</h1>
        <div className='p-2'>  
            {!props.name.length ? <p>Please enter a valid name and age (non-empty values).</p>:!props.age.length ? <p>Please enter a valid name and age (non-empty values).</p> : '' }
            
            {props.age<0 &&<p>Please enter a valid age (greater than 0).</p>}
        </div>
        <div className='d-flex justify-content-center'>
           <button className='btn btn-dark mb-1' 
           onClick={()=>props.setFind(false)}>Okay</button>
        </div>
        
   
      
    </div>
    
    </div>
   
  )
}

export default Checkbox