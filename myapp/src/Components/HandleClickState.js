import React, { useState } from 'react';
import Button from '../Atom/Button';

export default function HandleClickState() {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  const handleClick = () => {
    
    setIncrement(increment + 1);

   console.log(increment)
    setDecrement(increment-decrement);
    console.log(decrement)

  };

  return (
    <div>
      <Button onClickAction={handleClick} name='Click me' />
      <p>Increment: {increment}</p>
    
      <p>Decrement: {decrement}</p>
    </div>
  );
}
