import React from 'react'

const List = (props) => {
  return (
    <div className='d-flex justify-content-center'>
        <ul className=" list-group w-50 h-50 mt-2 ">
            <li className='list-group-item' >
                <h4>{props.i.name} ({props.i.age}years old) {props.i.clg}.</h4>
            </li>   
       </ul>
    </div>
    
    
  )
}

export default List