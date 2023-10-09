import React from 'react'

const Inputs = (props) => {
    
  return (
    <form className={props.find ? 'form' : ''} onSubmit={props.submitHandler}>
        <div className=" w-50 p-3 d-flex flex-column align-items-center bg-info justify-content-center  mt-4">
            <div className='w-75'>
                <label htmlFor="">Username:</label>
                <input  className='form-control' type="text" value={props.name} onChange={e=>props.setName(e.target.value)} disabled={props.find} 
                ref={props.nameRef} />
            </div>
            <div className='w-75'> 
                <label htmlFor="">Age(Years):</label>
                <input className='form-control' type="number" value={props.age} onChange={e=>props.setAge(e.target.value)}
                disabled={props.find}/>
            </div>
            <div className='w-75'>
                <label htmlFor="">College Name:</label>
                <input  className='form-control' type="text" value={props.clg} onChange={e=>props.setClg(e.target.value)} disabled={props.find}/>
            </div>
            <div className='w-75'>
            <button className='form-control btn btn-dark mt-3'type='submit' disabled={props.find}>Add User</button>
            </div>
        </div>
    </form>
    
  )
}

export default Inputs