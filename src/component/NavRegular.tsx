import { NavLink } from 'react-router-dom';
import CounterNonAdjustable from './Counter';
import './NavRegular.css';


const logoBrand = require('../assets/logo.png');
const logoCart = require('../assets/shopping-cart.png');
const logoStore = require('../assets/store.png');


export default function NavRegular(props: any){
  let cartLength = props.cartLength;

  return (
    <nav id='nav-regular'>
        <NavLink className='navlink' to='/store'>
          <img className='logo' src={logoBrand} alt='Brand' />
        </NavLink>

        <NavLink className='navlink' to='/store'>
          <img className='icon' src={logoStore} alt='Store' />
        </NavLink>
        <NavLink className='navlink' id='navlink-cart' to='/cart'>
          <div>
            <img className='icon' src={logoCart} alt='Cart' />
            
            { cartLength > 0 ? <CounterNonAdjustable amount={cartLength} /> : '' }
          </div>        
        </NavLink>
      </nav>
  )
}