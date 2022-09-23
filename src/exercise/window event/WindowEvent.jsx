import React, { useEffect, useState } from 'react'

const WindowEvent = () => {
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
       const doubleClick=()=>{
        alert('Don\'t double click')
       }

       window.addEventListener('dblclick',doubleClick);

    },[])

  return (
    <div>
        <button onClick={()=>setToggle(toggle=>!toggle)}>Window Event</button>
       {toggle && <h1>Window Event is active</h1>}
    </div>
  )
}

export default WindowEvent