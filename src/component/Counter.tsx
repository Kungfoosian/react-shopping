import { useEffect, useState } from "react";

export default function Counter(props: any) {
  const [amount, setAmount] = useState<number>(props.amount);

  useEffect(() => {
    setAmount(amount);

    if(props.handleEdit !== undefined) props.handleEdit(props.id, amount, false);
  }, [amount])

  function subtract(){
    if(amount === 0) return;

    setAmount(amount => amount - 1);

    if(props.handleEdit !== undefined) props.handleEdit(props.id, amount);
  }
  
  function add() {
    if(amount === 10) return;
    
    setAmount(amount => amount + 1);
    
    if(props.handleEdit !== undefined) props.handleEdit(props.id, amount);
  }

  return (
    <div className='counter-container'>
      <button onClick={subtract}>-</button>
      <p id={`${props.id}-amount`}>{amount}</p>
      <button onClick={add}>+</button>
    </div>
  )
}
