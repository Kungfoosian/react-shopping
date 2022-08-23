import { useState } from "react";

export default function Counter(props: any) {
  const [amount, setAmount] = useState(1);

  function subtract(){
    if(amount === 0) return;
    
    setAmount(amount - 1);
  }
  
  function add() {
    if(amount === 10) return;

    setAmount(amount + 1);
  }

  return (
    <div className='counter-container'>
      <button onClick={subtract}>-</button>
      <p id={`${props.id}-amount`}>{amount}</p>
      <button onClick={add}>+</button>
    </div>
  )
}
