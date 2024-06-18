import React from 'react';

function Button({ onClickAction, name}) {
   
   

    const handleClick=()=>{
        onClickAction();
    }
  return (
    <div>
      <button onClick={handleClick}>{name}</button>

     
    </div>
  );
}

export default Button;
