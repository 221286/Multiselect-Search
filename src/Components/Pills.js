import React from 'react'
import { handledelete } from '../Functions/handledelete';

const Pills = ({name,image,selecteduser,setselecteduser,users,selectedusermail,setselectedusermail}) => {
  return (
    <div className='pills-container' 
    onClick={()=>{handledelete(selecteduser,setselecteduser,users,selectedusermail,setselectedusermail);}}
     >
        <img src={image} alt={image}/> 
    <span> {name} &times;
        </span> 
    </div>
  )
}

export default Pills
