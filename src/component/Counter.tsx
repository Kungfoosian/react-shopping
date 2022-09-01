export default function Counter(props: any) {
  let amount = props.amount;

  function subtract(){
    if(amount === 0) return;
    
    amount--;

    if(props.handleEdit !== undefined) props.handleEdit(props.id, amount);
  }
  
  function add() {
    if(amount === 10) return;
    
    amount++;
    
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
