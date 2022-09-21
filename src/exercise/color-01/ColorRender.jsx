import React from 'react';
import Color from './Color';


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

const ColorRender = () => {
  return (

    <div>
    {color.map(item=>
      <Color key={item.index} hex={item.hex} name={item.name} />
    )}

    </div>
  )
}

export default ColorRender