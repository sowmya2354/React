import React from 'react'

export default function IteratingList({datalist}) {

  return (
    <div>
      <h1>{datalist.length}</h1>
     {
        datalist.map((item,index)=>(
            <li>{item}</li>
            
        ))
     }
    </div>
  )
}

