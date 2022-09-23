import React, { useState } from 'react'
import ColorButton from './ColorButton'
import './page.css'

const ColorPicker = () => {
    const color=[
        {name:'Cornflower Blu',
         hex:'#93CCEA'},
         {
         name:'Persian Pink',
         hex:'#F77FBE'},
         {
         name:'Screamin Green',
         hex:'#66ff66'},
         {
         name:'Tart Orange',
         hex:'#fb4d46'
         }
      ]

      const [colorPicker,setColorPicker]=useState('#ffffff');
    return(
        <div style={{backgroundColor:colorPicker}} className='page'>
        {color.map((item)=>
    
           <ColorButton key={item.index+1} name={item.name} hex={item.hex}
            setColorPicker={setColorPicker}
           />

        )}
        </div> 
        
    ) 
}

export default ColorPicker