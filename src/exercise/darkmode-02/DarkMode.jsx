import './darkmode.css';
import { useState } from 'react';

const DarkMode=()=>{
    const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode? 'darkMode' : 'lightMode'}>

    <button className='darkMode-button'
    onClick={()=>setDarkMode(true)}>
    Dark Mode</button>

    <button className='lightMode-button'
    onClick={()=>setDarkMode(false)}>
    Light Mode</button>
    </div>
  )
}

export default DarkMode