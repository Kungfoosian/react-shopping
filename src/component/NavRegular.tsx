import { NavLink } from 'react-router-dom';
import CounterNonAdjustable from './Counter';
import './NavRegular.css';


const logoBrand = require('../assets/logo.png');
const logoCart = require('../assets/shopping-cart.png');
const logoStore = require('../assets/store.png');


export default function NavRegular(props: any){
  let cartLength = props.cartLength;

  return (
    <nav className={`nav-regular ${props.burgerfied ? 'burgerfied' : '' }`}>
        <NavLink className='navlink' to='/store' onClick={props.handleClick} >
          <img className='logo' src={logoBrand} alt='Brand' />
        </NavLink>

        <NavLink className='navlink' to='/store' onClick={props.handleClick}>
          <img className='icon' src={logoStore} alt='Store' />
        </NavLink>
        <NavLink className='navlink' id='navlink-cart' to='/cart' onClick={props.handleClick}>
          <div>
            <img className='icon' src={logoCart} alt='Cart' />
            
            { cartLength > 0 ? <CounterNonAdjustable amount={cartLength} /> : '' }
          </div>        
        </NavLink>
      </nav>
  )
}