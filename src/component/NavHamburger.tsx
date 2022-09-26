import { useEffect, useState } from 'react';
import './NavHamburger.css'
import NavRegular from './NavRegular';

const iconExclamation = require('../assets/warning.png');

export default function NavHamburger(props: any) {
  const currentPath = window.location.pathname;
  
  function handleClick() {
    setSwitchToPositionClose(!switchToPositionClose);
    setDisplayNotification(false);
  }

  const [switchToPositionClose, setSwitchToPositionClose ] = useState(false);

  const [displayNotification, setDisplayNotification ] = useState(false); 

  useEffect(() => {
    if(props.cartLength > 0 && currentPath !== '/cart' ) setDisplayNotification(true);
  }, [props.cartLength, currentPath]);

  return <>
    <button className="nav-toggle" id="nav-toggle" onClick={handleClick} >
      <span className={`hamburger ${switchToPositionClose ? 'hamburger-close' : '' }`}>
          <span className={switchToPositionClose ? 'lines top-close' : 'lines top-normal'} id="burger-top"></span>
          <span className={switchToPositionClose ? 'lines bottom-close' : 'lines bottom-normal'} id="burger-bottom"></span>
      </span>

      {displayNotification ? 
        <span className='burger-notify'>
          <img className='logo' src={iconExclamation} alt='Brand' />
        </span> : ''}
    </button>

    {switchToPositionClose ? <NavRegular cartLength={props.cartLength} burgerfied={true} handleClick={handleClick} /> : ''}
  </>
}
