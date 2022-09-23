import React from 'react'
import './page.css'

const ColorButton = ({name,hex,setColorPicker}) => {
  return (
    <div className='button'>   
    <button onClick={()=>setColorPicker(hex)} 
    style={{backgroundColor:hex}}>{name}</button>
    </div>
  )
}

export default ColorButton