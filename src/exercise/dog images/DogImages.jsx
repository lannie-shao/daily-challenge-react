import React, { useState } from 'react'

const DogImages = () => {
    const [url,setUrl]=useState(
    "https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
    
    const change=()=>{
        // const index=Math.ceiling(Math.random() * 50);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>setUrl(data.message))
    }
  
    return (
    <div>
        <img src={url} alt='dog' height={300}/>
        <button type='button'onClick={change}>
        change picture</button>
    </div>
  )
}

export default DogImages